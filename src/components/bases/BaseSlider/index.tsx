import { FC, ReactNode, useRef, useState } from 'react'
import {
  StyledSliderContainer,
  StyledSliderPrevButton,
  StyledSliderNextButton,
  StyledSliderWrapper,
  StyledSlider,
} from './styled'
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/bases/BaseIcons'

interface SliderProps {
  children: ReactNode
  itemLength: number
  displaySize?: number
}

const BaseSlider: FC<SliderProps> = ({ children, itemLength, displaySize = 3 }) => {
  const ref = useRef<HTMLUListElement | null>(null)
  const [count, setCount] = useState(0)

  const handleRightArrowClick = () => {
    const slideItem = document.querySelector('#slideItem')

    if (!ref.current || !slideItem) return

    const newCount = count + 1
    if (newCount > itemLength - displaySize) return

    const MARGIN = 48
    const width = slideItem.clientWidth ?? 0
    ref.current.style.transition = '0.3s'
    ref.current.style.transform = `translateX(-${(width + MARGIN) * newCount}px)`
    setCount(newCount)
  }

  const handleLeftArrowClick = () => {
    const slideItem = document.querySelector('#slideItem')
    if (!ref.current || !slideItem) return

    const newCount = count - 1
    if (newCount < 0) return

    const MARGIN = 48
    const width = slideItem.clientWidth ?? 0
    ref.current.style.transition = '0.3s'
    ref.current.style.transform = `translateX(-${(width + MARGIN) * newCount}px)`
    setCount(newCount)
  }

  return (
    <StyledSliderContainer>
      {count !== 0 && (
        <StyledSliderPrevButton onClick={handleLeftArrowClick}>
          <ArrowLeftIcon />
        </StyledSliderPrevButton>
      )}
      {itemLength - displaySize > 0 && count !== itemLength - displaySize && (
        <StyledSliderNextButton onClick={handleRightArrowClick}>
          <ArrowRightIcon />
        </StyledSliderNextButton>
      )}
      <StyledSliderWrapper>
        <StyledSlider ref={ref}>{children}</StyledSlider>
      </StyledSliderWrapper>
    </StyledSliderContainer>
  )
}

export default BaseSlider
