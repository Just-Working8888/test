import {HeaderProps} from "./Header.props"
import styles from './Header.module.css'
import cn from "classnames"
import {IoLogoBuffer} from "react-icons/io"
import {ButtonIcon} from "src/components"
import Sidebar from "src/layout/Sidebar"
import { motion } from "framer-motion"
import {useEffect, useState} from "react"
import {useRouter} from "next/router"

const Header = ({className, ...props} : HeaderProps) => {
  const router = useRouter()
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    setIsOpened(false)
  }, [router])

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 0
      }
    },
    closed: {
      opacity: 0,
      x: '100%'
    }
  }

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.top}>
        <IoLogoBuffer className={styles.logo} />
        <ButtonIcon
          icon="menu"
          className={styles.menuIcon}
          onClick={() => setIsOpened(true)}
        />
      </div>
      <motion.div
        variants={variants}
        className={styles.mobileMenu}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar className={styles.sidebar} />
        <ButtonIcon
          icon="close"
          className={styles.closeMenu}
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  )
}

export default Header
