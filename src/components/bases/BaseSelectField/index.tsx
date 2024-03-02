import { FC, ComponentPropsWithRef } from 'react'
import { StyledSelectFieldWrapper, StyledSelect, StyledSelectFieldLabel } from './styled'

export interface Option {
  label: string
  value: string
}

interface SelectFieldProps extends ComponentPropsWithRef<'select'> {
  options: Option[]
  label: string
  labelId: string
}

const BaseSelectField: FC<SelectFieldProps> = ({
  options,
  label,
  labelId,
  required,
  value,
  ...prop
}) => {
  return (
    <StyledSelectFieldWrapper className="arrow">
      <StyledSelect {...prop} name={labelId} id={labelId} required={required}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
      <StyledSelectFieldLabel htmlFor={labelId} required={required}>
        {label}
      </StyledSelectFieldLabel>
    </StyledSelectFieldWrapper>
  )
}

export default BaseSelectField
