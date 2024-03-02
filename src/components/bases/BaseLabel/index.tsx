import { FC, ReactNode } from 'react'
import { ThemeColor } from '@/styles/theme'
import { StyledLabel } from './styled'

interface LabelProps {
  children: ReactNode
  variant?: 'contained' | 'outlined'
  color?: keyof ThemeColor
}

const BaseLabel: FC<LabelProps> = ({ children, variant = 'outlined', color = 'accent' }) => {
  return (
    <StyledLabel variant={variant} color={color}>
      {children}
    </StyledLabel>
  )
}

export default BaseLabel
