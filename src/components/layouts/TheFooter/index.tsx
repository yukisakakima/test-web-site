import { FC } from 'react'
import { StyledFooter, StyledFooterCopyRight } from './styled'

const TheFooter: FC = () => {
  return (
    <StyledFooter>
      <StyledFooterCopyRight>&copy; sample.com, Inc. All Rights Reserved.</StyledFooterCopyRight>
    </StyledFooter>
  )
}

export default TheFooter
