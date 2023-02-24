import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

export const SecondaryButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 16px 24px;
	gap: 12px;
	width: 100%;
	height: 48px;
	border: 2px solid ${mainTheme.semiLightColor};
	border-radius: 90px;
	background-color: ${mainTheme.contrastColor};

	font-family: 'DM Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	color: ${mainTheme.primaryColor};
`;
