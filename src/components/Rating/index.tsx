import {RatingProps} from "src/components/Rating/Rating.props"
import {ForwardedRef, forwardRef, KeyboardEvent, useEffect, useState} from "react"
import {TiStar} from 'react-icons/ti'
import styles from './Rating.module.css'
import cn from 'classnames'

const Rating = forwardRef(({className, error, setRating, rating, isEditable = false, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((rate, idx) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: idx < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseOver={() => changeDisplay(idx + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onChangeRating(idx + 1)}
        >
          <TiStar
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(idx + 1, e)}
          />
        </span>
      )
    })

    setRatingArray(updatedArray)
  }

  const changeDisplay = (rate: number) => {
    if (!isEditable) {
      return
    }

    constructRating(rate)
  }

  const onChangeRating = (rate: number) => {
    if (!isEditable || !setRating) {
      return
    }

    setRating(rate)
  }

  const handleSpace = (rate: number, event: KeyboardEvent<SVGElement>) => {
    if (!isEditable || !setRating || event.code !== 'Space') {
      return
    }

    setRating(rate)
  }

  return (
    <div {...props} ref={ref} className={cn(className, styles.ratingWrapper, {
      [styles.error]: error
    })}>
      {ratingArray.map((star, idx) => (
        <span key={idx}>{star}</span>
      ))}
      <span className={styles.errorMessage}>{error?.message}</span>
    </div>
  )
})

export default Rating