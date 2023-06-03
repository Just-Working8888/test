import styles from './Input.module.css'
import {InputProps} from './Input.props'
import cn from 'classnames'
import {ForwardedRef, forwardRef} from "react"

const Input = forwardRef(({error, className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(styles.inputWrapper, className)}>
      <input
        type="text"
        ref={ref}
        className={cn(styles.input, {
          [styles.error]: error
        })}
        {...props}
      />
      <span>{error?.message}</span>
    </div>
  )
})

export default Input
