import {TextAreaProps} from "./TextArea.props"
import styles from './TextArea.module.css'
import cn from "classnames"
import {ForwardedRef, forwardRef} from "react";

const TextArea = forwardRef(({resize = 'initial', error, className, ...props}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <div className={cn(styles.textareaWrapper, className)}>
        <textarea
          style={{resize: resize}}
          className={cn(styles.textArea, {
            [styles.error]: error
          })}
          {...props}
          ref={ref}
        />
        <span>{error?.message}</span>
      </div>
    )
  }
)
export default TextArea
