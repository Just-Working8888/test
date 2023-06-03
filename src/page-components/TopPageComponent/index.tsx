import {TopPageProps} from "src/page-components/TopPageComponent/TopPageComponent.props"
import {Advantages, HhData, Htag, Product, Sort, Tag} from "src/components"
import styles from './TopPageComponent.module.css'
import {TopLevelCategory} from "src/interfaces/page.interface"
import {SortType} from "src/components/Sort/Sort.props"
import {useEffect, useReducer} from "react"
import {sortReducer} from "./sort.reducer"
import {useScrollY} from "src/hooks/useScrollY";

const TopPageComponent = ({firstCategory, page, products}: TopPageProps) => {
  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortType.Rating})

  useEffect(() => {
    dispatchSort({type: 'refresh', initialState: products})
  }, [products])

  const setSort = (sort: SortType) => {
    dispatchSort({type: sort })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color="gray">{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>
      <div className={styles.products}>
        {sortedProducts && sortedProducts.map(p => <Product layout key={p._id} product={p}/>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="small">hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
      {
        page.advantages && page.advantages.length > 0 && <>
          <Htag className={styles.advantageTitle} tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages}/>
        </>
      }
      {
        page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>
      }
      <Htag tag="h2" className={styles.skillsTitle}>Получаемые навыки</Htag>
      {page.tags.map(t => <Tag className={styles.skill} key={t} color="primary">{t}</Tag>)}
    </div>
  )
}

export default TopPageComponent