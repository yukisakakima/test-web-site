import { FC, useEffect } from 'react'
import { StyedToast, StyedToastMessage, StyedToastCloseIcon } from './styled'
import { CloseIcon, CheckIcon, AlertIcon } from '../BaseIcons'

interface ToastProps {
  status: 'success' | 'error'
  message: string
  isOpen: boolean
  onClose: () => void
}

const BaseToast: FC<ToastProps> = ({ status, message, isOpen = false, onClose }) => {
  useEffect(() => {
    if (isOpen && status === 'success') {
      setTimeout(() => {
        onClose()
      }, 5000)
    }
  }, [isOpen, status, onClose])

  return (
    <StyedToast status={status} isOpen={isOpen}>
      {status === 'success' && <CheckIcon fill="success" width={16} height={16} />}
      {status === 'error' && <AlertIcon fill="red" width={16} height={16} />}
      <StyedToastMessage>{message}</StyedToastMessage>
      <StyedToastCloseIcon onClick={onClose}>
        <CloseIcon fill="black" width={14} height={14} />
      </StyedToastCloseIcon>
    </StyedToast>
  )
}

export default BaseToast
