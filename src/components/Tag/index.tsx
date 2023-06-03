import {TagProps} from "src/components/Tag/Tag.props"
import styles from './Tag.module.css'
import cn from 'classnames'

const Tag = ({size = 'medium', children, href, className, color = 'ghost', ...props}: TagProps) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary'
      })}
      {...props}
    >
      {
        href
          ? <a href={href}>{children}</a>
          : <>{children}</>
      }
    </div>
  )
}

export default Tag
