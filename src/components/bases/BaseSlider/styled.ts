import styled, { css } from 'styled-components'

export const StyledSliderContainer = styled.div`
	position: relative;
`

export const StyledSliderButton = css`
	position: absolute;
	top: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	background-color: ${({ theme }) => theme.color.white};
	border-radius: ${({ theme }) => theme['border-radius'].full};
	box-shadow: ${({ theme }) => theme['box-shadow']};
	cursor: pointer;
	transform: translate(-50%, -50%);
	z-index: 10;

	svg {
		fill: ${({ theme }) => theme.color.accent};
	}
`

export const StyledSliderPrevButton = styled.button`
	${StyledSliderButton}
	left: 0;
`

export const StyledSliderNextButton = styled.div`
	${StyledSliderButton}
	right: 0;
	transform: translate(50%, -50%);
`

export const StyledSliderWrapper = styled.div`
	overflow-x: hidden;
	padding: 0 6px 6px;
`

export const StyledSlider = styled.ul`
	display: flex;
	justify-content: flex-start;
	flex-wrap: nowrap;
	gap: 0 48px;
`
