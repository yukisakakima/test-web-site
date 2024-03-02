import { FC, ComponentPropsWithRef, ElementType } from 'react'
import { ThemeFontSize, ThemeColor } from '@/styles/theme'
import { StyledHeading, StyledHeadingInner } from './styled'

interface HeadingProps extends ComponentPropsWithRef<'h1'> {
  level?: ElementType
  fontSize?: keyof ThemeFontSize
  fontWeight?: 'normal' | 'bold'
  color?: keyof ThemeColor
}

const BaseHeading: FC<HeadingProps> = ({
  children,
  level = 'h1',
  fontSize = '2xl',
  fontWeight = 'normal',
  color = 'black',
  ...prop
}) => {
  return (
    <StyledHeading as={level} {...prop} fontSize={fontSize} fontWeight={fontWeight} color={color}>
      <StyledHeadingInner>{children}</StyledHeadingInner>
    </StyledHeading>
  )
}

export default BaseHeading
