import { FC, ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'
import { ThemeColor } from '@/styles/theme'
import { StyledInternalLink } from './styled'

interface InternalLinkProps extends LinkProps {
  children: ReactNode
  color?: keyof ThemeColor
}

const BaseInternalLink: FC<InternalLinkProps> = ({ children, color = 'accent', ...prop }) => {
  return (
    <StyledInternalLink {...prop} color={color}>
      {children}
    </StyledInternalLink>
  )
}

export default BaseInternalLink
