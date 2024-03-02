import { FC, ReactNode } from 'react'
import { StyledModalContent } from './styled'

interface ModalContentProps {
  children: ReactNode
}

const BaseModalContent: FC<ModalContentProps> = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>
}

export default BaseModalContent
