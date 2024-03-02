import { FC, ComponentPropsWithRef } from 'react'
import { ThemeFontSize, ThemeColor } from '@/styles/theme'
import { StyledTypography } from './styled'

interface TypographyProps extends ComponentPropsWithRef<'p'> {
  tag?: 'p' | 'span' | 'div'
  fontSize?: keyof ThemeFontSize
  fontWeight?: 'normal' | 'bold'
  color?: keyof ThemeColor
}

const BaseTypography: FC<TypographyProps> = ({
  children,
  tag,
  fontSize = 'sm',
  fontWeight = 'normal',
  color = 'black',
  ...prop
}) => {
  return (
    <StyledTypography as={tag} {...prop} fontSize={fontSize} color={color} fontWeight={fontWeight}>
      {children}
    </StyledTypography>
  )
}

export default BaseTypography
