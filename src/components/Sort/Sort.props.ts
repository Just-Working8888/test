import {DetailedHTMLProps, HTMLAttributes, } from "react"

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  sort: SortType
  setSort: (type: SortType) => void
}

export enum SortType {
  Rating,
  Price
}