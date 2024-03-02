import { FC } from 'react'
import {
  StyledBreadcrumbList,
  StyledBreadcrumbItem,
  StyledBreadcrumbLink,
  StyledBreadcrumbFlex,
  StyledBreadcrumbIcon,
} from './styled'
import { ArrowRightIcon } from '@/components/bases/BaseIcons'

interface BreadcrumbProps {
  breadcrumbs: { label: string; link?: string }[]
}

const BaseBreadcrumb: FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  return (
    <StyledBreadcrumbList>
      {breadcrumbs.map(({ label, link }) => (
        <StyledBreadcrumbItem key={label} link={link}>
          {link ? (
            <StyledBreadcrumbFlex>
              <StyledBreadcrumbLink to={link}>{label}</StyledBreadcrumbLink>
              <StyledBreadcrumbIcon>
                <ArrowRightIcon width={12} height={12} fill="black" />
              </StyledBreadcrumbIcon>
            </StyledBreadcrumbFlex>
          ) : (
            <span>{label}</span>
          )}
        </StyledBreadcrumbItem>
      ))}
    </StyledBreadcrumbList>
  )
}

export default BaseBreadcrumb
