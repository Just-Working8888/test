import {ButtonProps} from "src/components/Button/Button.props"
import styles from './Button.module.css'
import cn from 'classnames'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Button = ({children, arrow = 'none', appearance, className, ...props}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost'
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <MdKeyboardArrowRight
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right'
          })}/>
      )}
    </button>
  )
}

export default Button
