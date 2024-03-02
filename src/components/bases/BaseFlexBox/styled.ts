import styled from 'styled-components'
import { FlexBoxProps } from './'

export const StyledFlexBox = styled.div<FlexBoxProps>`
	display: flex;
	align-items: ${({ alignItems }) => alignItems};
	justify-content: ${({ justifyContent }) => justifyContent};
	flex-wrap: ${({ flexWrap }) => flexWrap};
	flex-flow: ${({ flexFlow }) => flexFlow};
	flex-basis: ${({ flexBasis }) => flexBasis};
	flex-direction: ${({ flexDirection }) => flexDirection};
	flex: ${({ flex }) => flex};
	gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : undefined)};
	row-gap: ${({ theme, rowGap }) => (rowGap ? theme.spacing[rowGap] : undefined)};
	column-gap: ${({ theme, columnGap }) => (columnGap ? theme.spacing[columnGap] : undefined)};
	order: ${({ order }) => order};
	flex-grow: ${({ flexGrow }) => flexGrow};
	flex-shrink: ${({ flexShrink }) => flexShrink};
`
