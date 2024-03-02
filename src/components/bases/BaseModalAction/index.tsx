import { FC, ReactNode } from 'react'
import { StyledModalAction } from './styled'
import { ThemeSpacing } from '@/styles/theme'

interface ModalActionProps {
  children: ReactNode
  direction?: 'start' | 'center' | 'end'
  gapX?: keyof ThemeSpacing
  gapY?: keyof ThemeSpacing
}

const BaseModalAction: FC<ModalActionProps> = ({ children, direction, gapX, gapY }) => {
  return (
    <StyledModalAction direction={direction} gapX={gapX} gapY={gapY}>
      {children}
    </StyledModalAction>
  )
}

export default BaseModalAction
