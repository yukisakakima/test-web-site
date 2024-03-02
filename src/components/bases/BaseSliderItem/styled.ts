import styled, { css } from 'styled-components'

export const StyledSliderItem = styled('li').withConfig({
	shouldForwardProp: (prop) => !['length'].includes(prop),
})<{ length: 1 | 2 | 3 }>`
	flex-shrink: 0;

	${({ length }) => {
		switch (length) {
			case 2:
				return css`
					width: calc((100% - 48px) / 2);
				`
			case 3:
				return css`
					width: calc((100% - 96px) / 3);
				`
			default:
				return css`
					width: 100%;
				`
		}
	}}
`
