import { FC, ComponentPropsWithRef } from 'react'
import { StyledSliderItem } from './styled'

interface SliderItemProps extends ComponentPropsWithRef<'li'> {
  displaySize?: 1 | 2 | 3
}

const BaseSliderItem: FC<SliderItemProps> = ({ children, displaySize = 3, ...prop }) => {
  return (
    <StyledSliderItem {...prop} id="slideItem" length={displaySize}>
      {children}
    </StyledSliderItem>
  )
}

export default BaseSliderItem
