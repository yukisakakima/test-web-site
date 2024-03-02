import { FC, ComponentPropsWithRef } from 'react'
import { StyledCheckboxWrapper, StyledCheckbox } from './styled'

interface CheckboxProps extends ComponentPropsWithRef<'input'> {}

const BaseCheckbox: FC<CheckboxProps> = (props) => {
  return (
    <StyledCheckboxWrapper className="checkbox">
      <StyledCheckbox type="checkbox" {...props} />
    </StyledCheckboxWrapper>
  )
}

export default BaseCheckbox
