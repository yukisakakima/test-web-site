import { FC, ComponentPropsWithRef } from 'react'
import { StyledSelectorListItem, StyledSelectedLabel } from './styled'

interface SelectorItemProps extends ComponentPropsWithRef<'li'> {
  isSelected?: boolean
}

const BaseSelectorItem: FC<SelectorItemProps> = ({ children, isSelected = false, ...prop }) => {
  return (
    <StyledSelectorListItem {...prop}>
      {children}
      {isSelected && <StyledSelectedLabel />}
    </StyledSelectorListItem>
  )
}

export default BaseSelectorItem
