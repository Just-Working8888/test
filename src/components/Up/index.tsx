import {motion, useAnimation} from "framer-motion"
import {useScrollY} from "src/hooks/useScrollY"
import {useEffect} from "react"
import styles from './Up.module.css'
import {ButtonIcon} from "src/components"

const Up = () => {
  const y = useScrollY()
  const controls = useAnimation()


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    controls.start({opacity: y / document.body.scrollHeight})
  }, [y, controls]);

  return (
    <motion.button
      animate={controls}
      initial={{opacity: 0}}
      className={styles.up}
    >
      <ButtonIcon icon="up" appearance="primary" onClick={scrollToTop}/>
    </motion.button>
  )
}

export default Up
