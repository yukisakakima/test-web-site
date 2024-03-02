import { FC, ComponentPropsWithRef, ElementType } from 'react'
import { StyledGridLayout } from './styled'
import { ThemeSpacing } from '@/styles/theme'

interface GridLayoutProps extends ComponentPropsWithRef<'div'> {
  col: number
  el?: ElementType
  gapX?: keyof ThemeSpacing
  gapY?: keyof ThemeSpacing
}

const BaseGridLayout: FC<GridLayoutProps> = ({
  children,
  col,
  el = 'div',
  gapX,
  gapY,
  ...prop
}) => {
  return (
    <StyledGridLayout as={el} col={col} gapX={gapX} gapY={gapY} {...prop}>
      {children}
    </StyledGridLayout>
  )
}

export default BaseGridLayout
