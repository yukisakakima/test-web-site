import { FC, ComponentPropsWithRef } from 'react'
import { StyledInputWrapper, StyledInputChildren, StyledInput } from './styled'

interface InputProps extends ComponentPropsWithRef<'input'> {}

const BaseInput: FC<InputProps> = ({ children, className, ...prop }) => {
  return (
    <StyledInputWrapper className={className}>
      {children && <StyledInputChildren>{children}</StyledInputChildren>}
      <StyledInput {...prop} />
    </StyledInputWrapper>
  )
}

export default BaseInput
