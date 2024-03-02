import { FC, ReactNode, ComponentPropsWithRef, ElementType } from 'react'
import { StyledGridItem } from './styled'

interface GridItemProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
  col: number
  el?: ElementType
}

const BaseGridItem: FC<GridItemProps> = ({ children, col, el = 'div', ...prop }) => {
  return (
    <StyledGridItem as={el} col={col} {...prop}>
      {children}
    </StyledGridItem>
  )
}

export default BaseGridItem
