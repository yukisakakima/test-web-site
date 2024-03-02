import { FC, ComponentPropsWithRef, ElementType } from 'react'
import { ThemeFontSize, ThemeColor } from '@/styles/theme'
import { StyledHeadingWithBar, StyledHeadingWithBarInner } from './styled'

interface HeadingWithBarProps extends ComponentPropsWithRef<'h1'> {
  level?: ElementType
  fontSize?: keyof ThemeFontSize
  fontWeight?: 'normal' | 'bold'
  color?: keyof ThemeColor
}

const BaseHeadingWithBar: FC<HeadingWithBarProps> = ({
  children,
  level = 'h1',
  fontSize = '2xl',
  fontWeight = 'normal',
  color = 'black',
  ...prop
}) => {
  return (
    <StyledHeadingWithBar
      as={level}
      {...prop}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      <StyledHeadingWithBarInner>{children}</StyledHeadingWithBarInner>
    </StyledHeadingWithBar>
  )
}

export default BaseHeadingWithBar
