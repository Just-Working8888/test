import {TopLevelCategory, TopPageModel} from "src/interfaces/page.interface"
import {ProductModel} from "src/interfaces/product.interface"

export interface TopPageProps {
  firstCategory: TopLevelCategory
  page: TopPageModel
  products: ProductModel[]
}