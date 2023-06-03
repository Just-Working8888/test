import {ParagraphProps} from "src/components/Paragraph/Paragraph.props"
import cn from 'classnames'
import styles from './Paragraph.module.css'

const Paragraph = ({size = 'medium', children, className, ...props}: ParagraphProps) => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large'
      })}
      {...props}
    >
      {children}
    </p>
  )
}

export default Paragraph