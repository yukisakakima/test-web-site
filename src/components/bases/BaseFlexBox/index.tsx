import { FC, ElementType, CSSProperties, ComponentPropsWithRef } from 'react'
import { StyledFlexBox } from './styled'
import { ThemeSpacing } from '@/styles/theme'

export interface FlexBoxProps extends ComponentPropsWithRef<'div'> {
  el?: ElementType
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  flexWrap?: CSSProperties['flexWrap']
  flexFlow?: CSSProperties['flexFlow']
  flexBasis?: CSSProperties['flexBasis']
  flexDirection?: CSSProperties['flexDirection']
  flex?: CSSProperties['flex']
  gap?: keyof ThemeSpacing
  rowGap?: keyof ThemeSpacing
  columnGap?: keyof ThemeSpacing
  order?: CSSProperties['order']
  flexGrow?: CSSProperties['flexGrow']
  flexShrink?: CSSProperties['flexShrink']
}

const BaseFlexBox: FC<FlexBoxProps> = ({ children, el, ...prop }) => {
  return (
    <StyledFlexBox as={el} {...prop}>
      {children}
    </StyledFlexBox>
  )
}

export default BaseFlexBox
