import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

export const MainFooter = styled.footer`
	display: flex;
	flex-direction: column;
	border-top: 1px solid ${mainTheme.semiLightColor};
	padding-top: 80px;
	padding-right: 160px;
	padding-left: 160px;
	padding-bottom: 0px;
	height: 309px;
	width: 100%;

	@media (max-width: 375px) {
		padding-left: 0px;
		padding-right: 0px;
	}

	p {
		margin-top: 20px;
		margin-bottom: 20px;

		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 32px;
		text-align: center;
		letter-spacing: -0.01em;
		color: #e6e8ec;

		@media (max-width: 375px) {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

export const CreatedBy = styled.div`
	text-align: center;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
	color: ${mainTheme.lightColor};
	padding-top: 32px;
`;
