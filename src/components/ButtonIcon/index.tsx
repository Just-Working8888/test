import styles from './ButtonIcon.module.css'
import {ButtonIconProps, icons} from "./ButtonIcon.props"
import cn from 'classnames'

const ButtonIcon = ({ appearance = 'primary', icon, className, ...props}: ButtonIconProps) => {
  const IconComponent = icons[icon]

  return (
    <span
      className={cn(styles.buttonIcon, className, {
        [styles.primary]: appearance === 'primary',
        [styles.white]: appearance === 'white'
      })}
      {...props}
    >
      <IconComponent/>
    </span>
  )
}

export default ButtonIcon
