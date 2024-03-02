import { FC, ComponentPropsWithRef } from 'react'
import { StyledDefineList } from './styled'

interface DefineListProps extends ComponentPropsWithRef<'dl'> {}

const BaseDefineList: FC<DefineListProps> = ({ children, ...prop }) => {
  return <StyledDefineList {...prop}>{children}</StyledDefineList>
}

export default BaseDefineList
