import {useContext, KeyboardEvent} from "react"
import {AppContext} from "src/context/app.context"
import {FirstLevelMenuItem, PageItem} from "src/interfaces/menu.interface"
import cn from "classnames"
import styles from './Menu.module.css'
import Link from "next/link"
import {useRouter} from "next/router"
import {firstLevelMenu} from "src/helpers/helpers"
import { motion } from "framer-motion"


const Menu = ({}) => {
  const {menu, setMenu, firstCategory} = useContext(AppContext)
  const router = useRouter()

  const variants = {
    visible: {
      marginBottom: 25,
      transition: {
        while: 'children',
        staggerChildren: 0.01
      }
    },
    hidden: {
      marginBottom: 0
    }
  }

  const childrenVariants = {
    visible: {
      opacity: 1,
      height: 'fit-content',
      marginBottom: 10
    },
    hidden: {
      opacity: 0,
      height: 0,
      marginBottom: 0
    }
  }

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory){
        m.isOpened = !m.isOpened
      }
      return m
    }))
  }

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === 'Space' || key.code === 'Enter'){
      key.preventDefault()
      openSecondLevel(secondCategory)
    }
  }

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id === firstCategory
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])){
            m.isOpened = true
          }

          return (
            <div key={m._id.secondCategory}>
              <div
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >{m._id.secondCategory}</div>
              <motion.div
                className={cn(styles.secondLevelBlock)}
                layout
                variants={variants}
                initial={m.isOpened ? 'visible': 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </div>
          )
        })}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {

    return (
      pages.map(p => (
        <motion.div
          variants={childrenVariants}
          key={p.alias}
        >
          <Link
            tabIndex={isOpened ? 0 : -1}
            href={`/${route}/${p.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath.replace('#', '')
            })}
          >
            {p.category}
          </Link>
        </motion.div>
      ))
    )
  }


  return (
    <div>
      {buildFirstLevel()}
    </div>
  )
}

export default Menu
