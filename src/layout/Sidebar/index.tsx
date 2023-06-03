import {SidebarProps} from "src/layout/Sidebar/Sidebar.props"
import Menu from "src/layout/Menu"
import {IoLogoBuffer} from "react-icons/io"
import cn from "classnames"
import styles from './Sidebar.module.css'
import {Search} from "src/components"

const Sidebar = ({ className, ...props } : SidebarProps) => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <IoLogoBuffer className={styles.logo}/>
      <Search/>
      <Menu/>
    </div>
  )
}

export default Sidebar
