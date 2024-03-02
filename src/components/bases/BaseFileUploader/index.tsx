import { ComponentPropsWithRef, FC } from 'react'
import {
  StyledBaseFileUploader,
  StyledBaseFileUploaderLabel,
  StyledBaseFileUploaderTitle,
  StyledBaseFileUploaderText,
} from './styled'
import { UploadIcon } from '@/components/bases/BaseIcons'

interface FileUploaderProps extends ComponentPropsWithRef<'input'> {
  label: string
  htmlFor: string
}

const BaseFileUploader: FC<FileUploaderProps> = ({ label, htmlFor, ...prop }) => {
  return (
    <div>
      <StyledBaseFileUploaderTitle>{label}</StyledBaseFileUploaderTitle>
      <StyledBaseFileUploaderLabel htmlFor={htmlFor}>
        <StyledBaseFileUploader {...prop} type="file" />
        <StyledBaseFileUploaderText>
          <UploadIcon fill="main" width="18px" height="18px" />
          ファイルを選択
        </StyledBaseFileUploaderText>
      </StyledBaseFileUploaderLabel>
    </div>
  )
}

export default BaseFileUploader
