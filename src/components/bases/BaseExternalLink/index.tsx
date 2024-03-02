import { FC, ComponentPropsWithRef } from 'react'
import { StyledExternalLink } from './styled'

interface ExternalLinkProps extends ComponentPropsWithRef<'a'> {}

const BaseExternalLink: FC<ExternalLinkProps> = ({ children, ...prop }) => {
  return (
    <StyledExternalLink target="_blank" rel="noopener noreferrer" {...prop}>
      {children}
    </StyledExternalLink>
  )
}

export default BaseExternalLink
