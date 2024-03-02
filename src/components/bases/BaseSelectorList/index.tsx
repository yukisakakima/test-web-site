import { FC, ComponentPropsWithRef } from 'react'
import { StyledSelectorList } from './styled'

interface SelectorListProps extends ComponentPropsWithRef<'ul'> {}

const BaseSelectorList: FC<SelectorListProps> = ({ children, ...prop }) => {
  return <StyledSelectorList {...prop}>{children}</StyledSelectorList>
}

export default BaseSelectorList
