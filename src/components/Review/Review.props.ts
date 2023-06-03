import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ReviewModel} from "src/interfaces/product.interface";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  review: ReviewModel
}