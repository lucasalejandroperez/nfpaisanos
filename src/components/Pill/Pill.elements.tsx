import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

interface PillProps {
	active?: boolean;
}

export const Pill = styled.span<PillProps>`
	padding: 6px 12px;
	gap: 10px;
	width: 83px;
	height: 28px;
	border-radius: 100px;

	font-family: 'DM Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;

	background-color: ${(props: PillProps) =>
		props.active !== undefined && props.active
			? mainTheme.fourthColor
			: 'none'};
	color: ${(props: PillProps) =>
		props.active !== undefined && props.active
			? mainTheme.darkColor
			: mainTheme.lightColor};

	&:hover {
		cursor: pointer;
	}
`;
