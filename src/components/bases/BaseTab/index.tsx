import { FC } from 'react'
import { StyledTab, StyledTabItem } from './styled'

interface Tab {
  id: string
  name: string
}

interface BaseTabProps {
  tabs: Tab[]
  currentTab?: string
  onTabChange: (tab: string) => void
}

const BaseTab: FC<BaseTabProps> = ({ tabs, currentTab, onTabChange }) => {
  return (
    <StyledTab>
      {tabs.map(({ id, name }) => (
        <StyledTabItem key={id} isActive={id === currentTab} onClick={() => onTabChange(id)}>
          {name}
        </StyledTabItem>
      ))}
    </StyledTab>
  )
}

export default BaseTab
