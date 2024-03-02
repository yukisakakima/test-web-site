import { FC } from 'react'
import { Link } from 'react-router-dom'
import { StyledMoreLinkWrapper, StyledMoreLinkText, StyledMoreLinkIcon } from './styled'
import { ArrowRightIcon } from '@/components/bases/BaseIcons'

interface MoreLinkProps {
  to: string
}

const BaseMoreLink: FC<MoreLinkProps> = ({ to }) => {
  return (
    <Link to={to}>
      <StyledMoreLinkWrapper>
        <StyledMoreLinkText>もっと見る</StyledMoreLinkText>
        <StyledMoreLinkIcon>
          <ArrowRightIcon width={14} height={14} />
        </StyledMoreLinkIcon>
      </StyledMoreLinkWrapper>
    </Link>
  )
}

export default BaseMoreLink
