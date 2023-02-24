import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

export const PrimaryButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 16px 24px;
	gap: 12px;
	width: 100%;
	height: 48px;
	background-color: ${mainTheme.terciaryColor};
	border-radius: 90px;
	border: 0px;

	font-family: 'DM Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	color: ${mainTheme.primaryColor};
`;
