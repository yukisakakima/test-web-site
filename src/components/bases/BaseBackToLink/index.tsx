import { FC } from 'react'
import { Link } from 'react-router-dom'
import { StyledBackToLinkIcon, StyledBackToLinkText, StyledBackToLinkWrapper } from './styled'
import { ArrowLeftIcon } from '@/components/bases/BaseIcons'

interface BackToLinkProps {
  to: string
  onClick?: () => void
}

const BaseBackToLink: FC<BackToLinkProps> = ({ to, onClick }) => {
  return (
    <Link to={to} onClick={onClick}>
      <StyledBackToLinkWrapper>
        <StyledBackToLinkIcon>
          <ArrowLeftIcon width={12} height={12} />
        </StyledBackToLinkIcon>
        <StyledBackToLinkText>戻る</StyledBackToLinkText>
      </StyledBackToLinkWrapper>
    </Link>
  )
}

export default BaseBackToLink
