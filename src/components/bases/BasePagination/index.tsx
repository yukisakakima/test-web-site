import { FC } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/bases/BaseIcons'
import { StyledPagination, StyledPaginationItem, StyledPaginationButton } from './styled'

interface PaginationProps {
  total: number
  page: number
  isPrevActive: boolean
  isNextActive: boolean
  onPageChange: (page: number) => void
}

const BasePagination: FC<PaginationProps> = ({
  total,
  page,
  isPrevActive,
  isNextActive,
  onPageChange,
}) => {
  if (!total) return <div />

  const paginationList = [...Array(total)]

  return (
    <StyledPagination>
      <StyledPaginationButton
        aria-label="前へ"
        isActive={isPrevActive}
        onClick={() => onPageChange(page - 1)}
      >
        <ArrowLeftIcon width={14} height={14} fill={isPrevActive ? 'accent' : 'white'} />
      </StyledPaginationButton>
      {paginationList.map((_, idx: number) => (
        <StyledPaginationItem
          key={idx}
          isActivePage={page === idx + 1}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </StyledPaginationItem>
      ))}
      <StyledPaginationButton
        aria-label="次へ"
        isActive={isNextActive}
        onClick={() => onPageChange(page + 1)}
      >
        <ArrowRightIcon width={14} height={14} fill={isNextActive ? 'accent' : 'white'} />
      </StyledPaginationButton>
    </StyledPagination>
  )
}

export default BasePagination
