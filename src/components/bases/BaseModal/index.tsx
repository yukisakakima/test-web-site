import { FC, ReactNode, useEffect, memo } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@/components/bases/BaseIcons'
import { StyledModalOverlay, StyledModal, StyledModalCloseIcon } from './styled'

const ModalPortal: FC<{ children: ReactNode }> = ({ children }) => {
  return createPortal(children, document.querySelector('#modal-root') as Element)
}

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  maxWidth?: number
  onClose?: () => void
}

const BaseModal: FC<ModalProps> = ({ children, isOpen, maxWidth = 576, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-fixed')
    } else {
      document.body.classList.remove('body-fixed')
    }

    return () => {
      if (isOpen) {
        document.body.classList.remove('body-fixed')
      }
    }
  }, [isOpen])

  return (
    <ModalPortal>
      <StyledModalOverlay isOpen={isOpen} onClose={onClose} onClick={onClose} />
      <StyledModal isOpen={isOpen} maxWidth={maxWidth}>
        {onClose && (
          <StyledModalCloseIcon onClick={onClose}>
            <CloseIcon width={18} height={18} fill="black" />
          </StyledModalCloseIcon>
        )}
        <>{children}</>
      </StyledModal>
    </ModalPortal>
  )
}

export default memo(BaseModal)
