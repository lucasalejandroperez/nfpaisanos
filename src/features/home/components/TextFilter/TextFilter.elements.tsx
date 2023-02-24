import styled from 'styled-components';
import { mainTheme } from '../../../../styles/theme';

export const TextFilterContainer = styled.div`
	display: flex;
	margin: 58px 0;
	width: 1118px;

	@media (max-width: 375px) {
		margin: 24px 0;
		width: 300px;
	}

	input {
		width: 100%;
		height: 73px;
		background-color: ${mainTheme.contrastColor};
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom: 1px solid ${mainTheme.semiLightColor};

		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 32px;
		display: flex;
		align-items: center;
		letter-spacing: -0.01em;
		color: ${mainTheme.primaryColor};

		@media (max-width: 375px) {
			font-size: 18px;
		}
	}
`;
