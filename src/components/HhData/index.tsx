import styles from './HhData.module.css'
import {HhDataProps} from "src/components/HhData/HhData.props"
import {Card} from "src/components"
import {FaStar} from 'react-icons/fa'
import {priceRu} from "src/helpers/helpers";

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <FaStar className={styles.filled}/>
            <FaStar/>
            <FaStar/>
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <FaStar className={styles.filled}/>
            <FaStar className={styles.filled}/>

            <FaStar/>
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <FaStar className={styles.filled}/>
            <FaStar className={styles.filled}/>
            <FaStar className={styles.filled}/>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default HhData
