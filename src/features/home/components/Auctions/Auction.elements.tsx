import styled from 'styled-components';
import { mainTheme } from '../../../../styles/theme';

export const AuctionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* align-items: center; */
	padding: 12px;
	height: 474px;
	width: 256px;
	background-color: ${mainTheme.darkColor};
	box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
	border-radius: 20px;

	&:hover {
		box-shadow: 0 0 10px ${mainTheme.fourthColor};
	}

	@media (max-width: 375px) {
		width: 311px;
	}
`;

export const AuctionImage = styled.div`
	display: flex;

	img {
		width: 233px;
		height: 302px;
		border-radius: 16px;

		@media (max-width: 375px) {
			width: 287px;
		}
	}
`;

export const TitleAuction = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	column-gap: 5px;
	margin-top: 21px;

	span:first-child {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: ${mainTheme.primaryColor};
	}
`;

export const BidUsersContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 12px;
	margin-bottom: 12px;
	width: 100%;

	div:nth-child(2) {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		color: ${mainTheme.primaryColor};
	}
`;

export const HighestBids = styled.div`
	display: flex;
	padding-top: 12px;
	width: 100%;

	img {
		width: 19px;
		height: 26px;
	}

	span:nth-child(2) {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 20px;
		color: ${mainTheme.lightColor};
		margin-left: 4px;
	}

	span:nth-child(3) {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 20px;
		color: ${mainTheme.primaryColor};
		margin-left: 4px;
	}

	span:nth-child(4) {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 20px;
		color: ${mainTheme.lightColor};
		margin-left: 17px;
	}
`;
