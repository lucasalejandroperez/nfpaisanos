import styled from 'styled-components';

export const AuctionsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;
	max-width: 832px;
	margin-bottom: 64px;
	margin-left: 32px;

	@media (max-width: 375px) {
		display: flex;
		flex-direction: column;
		margin-bottom: 64px;
		margin-left: 0px;
	}
`;
