import { FC } from 'react'
import { BaseLoading } from '@/components/bases'
import { StyledPageLoading } from './styled'

const ThePageLoading: FC = () => {
  return (
    <StyledPageLoading alignItems="center" justifyContent="center">
      <BaseLoading size="large" />
    </StyledPageLoading>
  )
}

export default ThePageLoading
