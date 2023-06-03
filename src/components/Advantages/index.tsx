import styles from './Advantages.module.css'
import {AdvantagesProps} from "./Advantages.props"
import {BsCheckCircleFill} from "react-icons/bs"
import {Paragraph} from "src/components"

const HhData = ({advantages}: AdvantagesProps): JSX.Element => {
  return (
    <>
      {
        advantages.map(a => (
          <div key={a._id} className={styles.advantage}>
            <BsCheckCircleFill className={styles.checkIcon}/>
            <div className={styles.title}>{a.title}</div>
            <hr className={styles.vline}/>
            <Paragraph size="small">{a.description}</Paragraph>
          </div>
        ))
      }
    </>
  )
}

export default HhData
