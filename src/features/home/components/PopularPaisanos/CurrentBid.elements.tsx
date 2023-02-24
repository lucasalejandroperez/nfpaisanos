import styled from 'styled-components';
import { mainTheme } from '../../../../styles/theme';

export const CurrentBidContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 32px;
	gap: 24px;
	height: 296px;
	background-color: ${mainTheme.darkColor};
	box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
	border-radius: 24px;
	margin-bottom: 40px;
`;

export const CurrentBidPrice = styled.div`
	display: flex;
	flex-direction: column;

	span:nth-child(1) {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		text-align: center;
		color: ${mainTheme.primaryColor};
	}

	span:nth-child(2) {
		font-family: 'DM Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 48px;
		line-height: 56px;
		text-align: center;
		letter-spacing: -0.02em;
		color: ${mainTheme.primaryColor};
	}

	span:nth-child(3) {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 32px;
		text-align: center;
		color: ${mainTheme.lightColor};
	}
`;

export const AuctionEnding = styled.div`
	span {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		text-align: center;
		color: ${mainTheme.primaryColor};
	}

	div {
		display: flex;
		flex-direction: row;
		column-gap: 20px;

		div {
			display: flex;
			flex-direction: column;

			span:nth-child(1) {
				font-family: 'DM Sans';
				font-style: normal;
				font-weight: 700;
				font-size: 32px;
				line-height: 40px;
				text-align: center;
				letter-spacing: -0.01em;
				color: ${mainTheme.primaryColor};
			}

			span:nth-child(2) {
				font-family: 'Poppins';
				font-style: normal;
				font-weight: 500;
				font-size: 16px;
				line-height: 24px;
				text-align: center;
				color: ${mainTheme.lightColor};
			}
		}
	}
`;
