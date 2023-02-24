import styled from 'styled-components';
import { mainTheme } from '../../../../styles/theme';

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	height: 400px;

	@media (max-width: 375px) {
		height: 300px;
	}

	h2 {
		font-family: 'DM Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 40px;
		line-height: 48px;
		text-align: center;
		letter-spacing: -0.01em;

		color: ${mainTheme.primaryColor};
	}

	h4 {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 12px;
		text-transform: uppercase;
		color: ${mainTheme.lightColor};
	}
`;
