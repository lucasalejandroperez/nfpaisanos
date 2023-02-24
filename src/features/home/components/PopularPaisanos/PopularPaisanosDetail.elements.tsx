import styled from 'styled-components';
import { mainTheme } from '../../../../styles/theme';

export const PopularPaisanosDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 352px;

	h1 {
		font-family: 'DM Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 64px;
		line-height: 64px;
		letter-spacing: -0.02em;
		color: ${mainTheme.primaryColor};
	}

	@media (max-width: 375px) {
		width: 304px;
	}
`;

export const AvatarDetailContainer = styled.div`
	display: flex;
	gap: 35px;
	margin-top: 20px;
	margin-bottom: 40px;

	@media (max-width: 375px) {
		gap: 20px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 104px;
	margin-bottom: 40px;

	button:hover {
		cursor: pointer;
	}
`;

export const SwiperButtonsContainer = styled.div`
	display: flex;
	gap: 8px;
`;
