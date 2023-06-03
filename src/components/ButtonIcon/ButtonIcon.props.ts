import {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import {IoIosArrowUp} from "react-icons/io"
import {HiOutlineMenu} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'

export const icons = {
  up: IoIosArrowUp,
  menu: HiOutlineMenu,
  close: MdClose
}

export type IconType = keyof typeof icons

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  icon: IconType
  appearance?: 'primary' | 'white'
}