import { FC, ComponentPropsWithRef } from 'react'
import { StyledDefineDescription } from './styled'

interface DefineDescriptionProps extends ComponentPropsWithRef<'dd'> {}

const BaseDefineDescription: FC<DefineDescriptionProps> = ({ children, ...prop }) => {
  return <StyledDefineDescription {...prop}>{children}</StyledDefineDescription>
}

export default BaseDefineDescription
