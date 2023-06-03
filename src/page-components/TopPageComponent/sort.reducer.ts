import {SortType} from "src/components/Sort/Sort.props"
import {ProductModel} from "src/interfaces/product.interface"

export interface SortReducerState {
  sort: SortType
  products: ProductModel[]
}

export const sortReducer = (state: SortReducerState, action: { type: SortType } | {type: 'refresh', initialState: ProductModel[]}) => {
  switch (action.type) {
    case 'refresh':
      return {
        sort: SortType.Rating,
        products: action.initialState
      }
    case SortType.Price:
      return {
        sort: SortType.Price,
        products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
      }
    case SortType.Rating:
      return {
        sort: SortType.Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      }
    default:
      throw new Error('Неверный тип сортировки')
  }
}