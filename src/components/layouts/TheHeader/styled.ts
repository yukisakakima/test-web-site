import styled from 'styled-components'
import { BaseFlexBox } from '@/components/bases'

export const StyledBaseHeader = styled.header`
	width: 100%;
	padding: 20px 0;
	background-color: ${({ theme }) => theme.color.white};
`

export const StyledBaseHeaderInner = styled(BaseFlexBox)`
	max-width: min(calc(1000 / 1280 * 100vw), 1000px);
	margin: 0 auto;
`
