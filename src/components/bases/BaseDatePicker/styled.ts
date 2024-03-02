import styled from 'styled-components'
import { ThemeColor } from '@/styles/theme'

export const StyledDatePickerOverlay = styled('div').withConfig({
	shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	min-height: 100vh;
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	transition: ${({ theme }) => theme.transition};
	z-index: 20;
`

export const StyledDatePickerWrapper = styled.div`
	position: relative;
`

export const StyledDatePickerIcon = styled.div`
	position: absolute;
	top: calc(50% + 8px);
	right: 12px;
	width: 16px;
	height: 16px;
	cursor: pointer;
	transform: translateY(-50%);
	z-index: 10;

	svg {
		width: 16px;
		height: 16px;
		fill: ${({ theme }) => theme.color.accent};
	}
`

export const StyledCalendar = styled('div').withConfig({
	shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<{ isOpen: boolean }>`
	position: absolute;
	top: 100%;
	left: 0;
	width: 240px;
	padding: ${({ theme }) => theme.spacing.lg};
	background-color: ${({ theme }) => theme.color.white};
	transition: ${({ theme }) => theme.transition};
	border-radius: ${({ theme }) => theme['border-radius']['rounded-md']};
	box-shadow: ${({ theme }) => theme['box-shadow']};
	opacity: ${({ isOpen }) => (isOpen ? '1' : 0)};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	z-index: 20;
`

export const StyledCalendarHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const StyledCalendarIcon = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	cursor: pointer;
	user-select: none;

	svg {
		width: 14px;
		height: 14px;
		fill: ${({ theme }) => theme.color.accent};
	}
`

export const StyledCalendarYearMonth = styled.div`
	flex: 1;
	text-align: center;
	user-select: none;
`

export const StyledCalendarWeek = styled.ul`
	${({ theme }) => theme['grid-layout'](7)}
	gap: ${({ theme }) => theme.spacing.md};
	margin-top: ${({ theme }) => theme.spacing.xl};
`

export const StyledCalendarWeekItem = styled('li').withConfig({
	shouldForwardProp: (prop) => !['color'].includes(prop),
})<{ color: keyof ThemeColor }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	user-select: none;
	color: ${({ theme, color }) => theme.color[color]};
`

export const StyledCalendarDate = styled.ul`
	${({ theme }) => theme['grid-layout'](7)}
	gap: ${({ theme }) => theme.spacing.md};
	margin-top: ${({ theme }) => theme.spacing.md};
`

export const StyledCalendarDateItem = styled('li').withConfig({
	shouldForwardProp: (prop) => !['color'].includes(prop),
})<{ color: keyof ThemeColor }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	user-select: none;
	color: ${({ theme, color }) => theme.color[color]};
	border-radius: ${({ theme }) => theme['border-radius'].full};
	transition: ${({ theme }) => `background ${theme.transition}`};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.color.overlay};
		opacity: 0.7;
	}
`
