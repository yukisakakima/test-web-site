import { FC, ComponentPropsWithRef } from 'react'
import {
  StyledTextFieldWrapper,
  StyledTextFieldInputWrapper,
  StyledTextFieldInput,
  StyledTextFieldLabel,
  StyledErrorMessage,
} from './styled'

interface TextFieldProps extends ComponentPropsWithRef<'input'> {
  label: string
  labelId: string
  isError?: boolean
  errorMessage?: string
}

const BaseTextField: FC<TextFieldProps> = ({
  label,
  labelId,
  required,
  isError,
  errorMessage,
  ...prop
}) => {
  return (
    <StyledTextFieldWrapper>
      <StyledTextFieldInputWrapper>
        <StyledTextFieldInput
          {...prop}
          // !以下を変更変更
          // name={labelId}
          name={prop.name}
          required={required}
          placeholder=" "
          isError={isError}
        />
        <StyledTextFieldLabel htmlFor={labelId} required={required} isError={isError}>
          {label}
        </StyledTextFieldLabel>
      </StyledTextFieldInputWrapper>
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledTextFieldWrapper>
  )
}

export default BaseTextField
