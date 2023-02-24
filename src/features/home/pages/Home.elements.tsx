import styled from 'styled-components';

export const HomeContainer = styled.div`
	padding: 0 32px;
`;

export const AuctionContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	@media (max-width: 375px) {
		flex-direction: column;
	}
`;

export const MainContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
