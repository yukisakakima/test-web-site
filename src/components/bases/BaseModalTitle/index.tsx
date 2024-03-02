import { FC, ReactNode } from 'react'
import { StyledModalTitle } from './styled'

interface ModalTitleProps {
  children: ReactNode
}

const BaseModalTitle: FC<ModalTitleProps> = ({ children }) => {
  return <StyledModalTitle>{children}</StyledModalTitle>
}

export default BaseModalTitle
