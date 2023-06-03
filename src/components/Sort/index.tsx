import {SortProps, SortType} from "./Sort.props"
import cn from 'classnames'
import styles from './Sort.module.css'
import {MdSort} from "react-icons/md"

const Sort = ({sort, setSort, className, ...props}: SortProps) => {
  return (
    <div
      className={cn(styles.sort, className)}
      {...props}
    >
      <span
        className={cn({
          [styles.active]: sort === SortType.Price
        })}
        onClick={() => setSort(SortType.Price)}
      >
        <MdSort/>
        По цене
      </span>
      <span
        className={cn({
          [styles.active]: sort === SortType.Rating
        })}
        onClick={() => setSort(SortType.Rating)}
      >
        <MdSort/>
        По рейтингу
      </span>
    </div>
  )
}

export default Sort
