export interface ProductCharacterList {
  value: string
  name: string
}

export interface ReviewModel {
  _id: string
  name: string
  title: string
  description: string
  createdAt: Date
  rating: number
}

export interface ProductModel {
  _id: string
  categories: string[]
  tags: string[]
  title: string
  link: string
  price: number
  credit: number
  oldPrice: number
  description: string
  characteristics: ProductCharacterList[]
  cratedAt: Date
  updatedAt: Date
  __v: number
  image: string
  initialRating: number
  reviews: ReviewModel[]
  reviewCount: number
  reviewAvg?: number
  advantages?: string
  disadvantages?: string
}