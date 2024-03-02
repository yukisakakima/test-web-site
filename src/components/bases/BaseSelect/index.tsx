import { FC, ComponentPropsWithRef } from 'react'
import { StyledSelectWrapper, StyledSelect, StyledSelectChildren } from './styled'

export interface Option {
  label: string
  value: string
}

interface SelectProps extends ComponentPropsWithRef<'select'> {
  options: Option[]
  placeholder?: string //! 追加した型宣言
}

const BaseSelect: FC<SelectProps> = ({ children, options, placeholder, ...prop }) => {
  return (
    <StyledSelectWrapper className="arrow">
      {children && <StyledSelectChildren>{children}</StyledSelectChildren>}
      <StyledSelect {...prop} required>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  )
}

export default BaseSelect
