import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledBaseHeader, StyledBaseHeaderInner } from './styled'
import { GlobalNavigation, LoggedInGlobalNavigation } from '@/components/layouts/TheNavigation'
import { BaseInternalLink, BaseHeading } from '@/components/bases'
import useSelector from '@/hooks/useSelector'

const TheHeader: FC = () => {
  const location = useLocation()
  const level = location.pathname === '/' ? 'h1' : 'div'
  const isLogin = useSelector((state) => state.auth.isLogin)

  return (
    <StyledBaseHeader>
      <StyledBaseHeaderInner alignItems="center" justifyContent="space-between">
        <BaseHeading level={level}>
          <BaseInternalLink to="/" color="black">
            サンプル求人
          </BaseInternalLink>
        </BaseHeading>
        {isLogin === null ? <div /> : isLogin ? <LoggedInGlobalNavigation /> : <GlobalNavigation />}
      </StyledBaseHeaderInner>
    </StyledBaseHeader>
  )
}

export default TheHeader
