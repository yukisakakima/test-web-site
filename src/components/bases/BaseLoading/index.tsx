import { FC } from 'react'
import { StyledLoadingContainer, StyledLoading } from './styled'

interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
}

const BaseLoading: FC<LoadingProps> = ({ size = 'small' }) => {
  return (
    <StyledLoadingContainer>
      <StyledLoading role="progressbar" size={size} />
    </StyledLoadingContainer>
  )
}

export default BaseLoading
