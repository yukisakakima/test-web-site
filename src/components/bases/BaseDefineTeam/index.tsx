import { FC, ComponentPropsWithRef } from 'react'
import { StyledDefineTeam } from './styled'

interface DefineTeamProps extends ComponentPropsWithRef<'dt'> {}

const BaseDefineTeam: FC<DefineTeamProps> = ({ children, ...prop }) => {
  return <StyledDefineTeam {...prop}>{children}</StyledDefineTeam>
}

export default BaseDefineTeam
