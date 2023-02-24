import styled from 'styled-components';

export const PopularPaisanosContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 128px;

	@media (max-width: 375px) {
		flex-direction: column;
	}
`;
