import { FC, ComponentPropsWithRef } from 'react'
import { StyledImageWrapper, StyledImage } from './styled'

interface ImageProps extends ComponentPropsWithRef<'img'> {}

const BaseImage: FC<ImageProps> = ({ alt = '', ...prop }) => {
  return (
    <StyledImageWrapper>
      <StyledImage {...prop} alt={alt} />
    </StyledImageWrapper>
  )
}

export default BaseImage
