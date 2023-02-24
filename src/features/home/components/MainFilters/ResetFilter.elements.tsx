import styled from 'styled-components';
import { mainTheme } from '../../../../styles/theme';

export const ResetFilterContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 10px;
	margin-top: 24px;
	margin-bottom: 24px;

	@media (max-width: 375px) {
		margin-bottom: 36px;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		border: 1px solid ${mainTheme.primaryColor};
		color: ${mainTheme.darkColor};

		font-family: 'DM Sans';
		font-weight: 700;
		font-size: 16px;
		line-height: 16px;
		text-align: center;
	}

	span {
		cursor: pointer;
	}

	@media (max-width: 375px) {
	}
`;
