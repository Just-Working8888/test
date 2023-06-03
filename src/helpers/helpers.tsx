import {FirstLevelMenuItem} from "src/interfaces/menu.interface"
import {AiFillCloud, FaBoxOpen, FaGraduationCap, GiSpellBook} from "src/layout/Menu/icons"
import {TopLevelCategory} from "src/interfaces/page.interface"

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <FaGraduationCap/>, id: TopLevelCategory.Courses},
  {route: 'services', name: 'Сервисы', icon: <AiFillCloud/>, id: TopLevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <GiSpellBook/>, id: TopLevelCategory.Books},
  {route: 'products', name: 'Продукты', icon: <FaBoxOpen/>, id: TopLevelCategory.Products},
]

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')

export const declensionOfNumber = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 20 : cases[(number % 10 < 5 ? number % 10 : 5)]]
}