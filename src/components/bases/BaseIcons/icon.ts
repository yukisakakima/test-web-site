import { ComponentPropsWithRef } from 'react'
import { ThemeColor } from '@/styles/theme'

export interface IconProps extends Omit<ComponentPropsWithRef<'svg'>, 'fill'> {
  fill?: keyof ThemeColor
}
