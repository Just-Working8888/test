import {LayoutProps} from "src/layout/Layout.props"
import Header from "src/layout/Header"
import Sidebar from "src/layout/Sidebar"
import Footer from "src/layout/Footer"
import styles from './Layout.module.css'
import {FunctionComponent, useState} from "react"
import {AppContextProvider, IAppContext} from "src/context/app.context"
import {Up} from "src/components"
import cn from "classnames"


const Layout = ({children}: LayoutProps) => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState(false)

  const open = () => {

  }

  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setIsSkipLinkDisplayed(true)}
        tabIndex={1}
        className={cn(styles.skipLink, {
        [styles.displayed]: isSkipLinkDisplayed
      })}
      >Сразу к содержанию</a>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <div className={styles.body}>
        {children}
      </div>
      <Up/>
      <Footer className={styles.footer}/>
    </div>
  )
}

export default Layout

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    )
  }
}
