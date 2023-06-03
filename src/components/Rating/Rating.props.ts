import {FieldError} from "react-hook-form"
import {DetailedHTMLProps, HTMLAttributes} from "react"

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
  rating: number
  isEditable?: boolean
  setRating?: (rating: number) => void
  error?: FieldError
}