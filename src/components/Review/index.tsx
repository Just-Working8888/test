import {ReviewProps} from "./Review.props"
import cn from 'classnames'
import styles from './Review.module.css'
import {HiOutlineUserCircle} from "react-icons/hi"
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'
import {Paragraph, Rating} from "src/components"

const Reviews = ({review, className, ...props}: ReviewProps) => {
  const {name, rating, _id, title, description, createdAt} = review

  return (
    <div
      {...props}
      className={cn(className, styles.reviews)}
    >
      <HiOutlineUserCircle className={styles.user}/>
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating}/>
      </div>
      <Paragraph size="small" className={styles.description}>{description}</Paragraph>
    </div>
  )
}

export default Reviews