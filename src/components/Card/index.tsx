import styles from './Card.module.css'
import cn from 'classnames'
import {CardProps} from "src/components/Card/Card.props"
import {ForwardedRef, forwardRef} from "react";

const Card = forwardRef(({children, color = 'white', className, ...props}: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === 'blue'
      })}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})

export default Card
