import styles from './Product.module.css'
import cn from 'classnames'
import {ProductProps} from "./Product.props"
import {Button, Card, Divider, Htag, Paragraph, Rating, Review, ReviewForm, Tag} from "src/components"
import {declensionOfNumber, priceRu} from "src/helpers/helpers"
import Image from 'next/image'
import {ForwardedRef, forwardRef, useRef, useState} from "react"
import {motion} from 'framer-motion'
import {flushSync} from "react-dom"

const Product = motion(forwardRef((
  {
    product,
    className,
    ...props
  }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewsOpened, setIsReviewsOpened] = useState(false)

  const reviewRef = useRef<HTMLDivElement>(null)

  const scrollToReview = () => {
    flushSync(() => {
      setIsReviewsOpened(true)
    })

    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  const variants = {
    hidden: {
      height: 0,
      opacity: 0,
      overflow: 'hidden'
    },
    visible: {
      height: 'auto',
      opacity: 1
    }
  }

  return (
    <div {...props} className={className} ref={ref}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {priceRu(product.price)}
          {product.oldPrice && <Tag className={styles.oldPrice} color="green">{product.price - product.oldPrice}</Tag>}
        </div>
        <div className={styles.credit}>
          {priceRu(product.credit)}/<span>мес.</span>
        </div>
        <div className={styles.rating}><Rating rating={product.reviewAvg || product.initialRating}/></div>
        <div className={styles.tags}>
          {product.categories.map(c => (
            <Tag
              key={c}
              color="ghost"
              className={styles.category}
            >
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>кредит</div>
        <div className={styles.rateTitle}>
          <a href="#" onClick={scrollToReview}>
            {product.reviewCount} {declensionOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
          </a>
        </div>

        <Divider className={styles.hr}/>

        <Paragraph className={styles.description}>{product.description}</Paragraph>
        <div className={styles.features}>
          {
            product.characteristics.map(c => (
              <div className={styles.characteristic} key={c.name}>
                <span className={styles.characteristicName}>{c.name}</span>
                <span className={styles.characteristicDots}></span>
                <span className={styles.characteristicValue}>{c.value}</span>
              </div>
            ))
          }
        </div>
        <div className={styles.advBlock}>
          {product.advantages && <div className={styles.advantages}>
            <h5>Преимущества</h5>
            <div>{product.advantages}</div>
          </div>}
          {product.disadvantages && <div className={styles.disadvantages}>
            <Htag tag="h3">Недостатки</Htag>
            <div>{product.disadvantages}</div>
          </div>}
        </div>

        <Divider className={cn(styles.hr, styles.hr2)}/>

        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            appearance="ghost"
            arrow={isReviewsOpened ? "down" : "right"}
            onClick={() => setIsReviewsOpened(prev => !prev)}
          >Читать отзывы</Button>
        </div>
      </Card>
      <motion.div
        variants={variants}
        animate={isReviewsOpened ? 'visible' : 'hidden'}
        initial={'hidden'}
      >
        <Card ref={reviewRef} color="blue" className={styles.reviews}>
          {
            product.reviews.map(r => (
              <div key={r._id}>
                <Review key={r._id} review={r}/>
                <Divider/>
              </div>
            ))
          }
          <ReviewForm productId={product._id}/>
        </Card>
      </motion.div>
    </div>
  )
}))

export default Product
