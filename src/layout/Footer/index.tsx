import {FooterProps} from "src/layout/Footer/Footer.props"
import styles from './Footer.module.css'
import cn from "classnames"
import format from 'date-fns/format'

const Footer = ({ className, ...props} : FooterProps) => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <div>OwlTop co. 2022 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank">Пользовательское соглашение</a>
      <a href="#" target="_blank">Политика конфиденциальности</a>
    </footer>
  )
}

export default Footer
