import { FC, ComponentPropsWithRef } from 'react'
import { StyledCard } from './styled'
import { ThemeSpacing } from '@/styles/theme'

interface CardProps extends ComponentPropsWithRef<'div'> {
  py?: keyof ThemeSpacing
  px?: keyof ThemeSpacing
}

const BaseCard: FC<CardProps> = ({ children, ...prop }) => {
  return <StyledCard {...prop}>{children}</StyledCard>
}

export default BaseCard
