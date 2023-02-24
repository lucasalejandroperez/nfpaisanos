import styled from 'styled-components';

export const SimpleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 300px;
	padding-left: 14px;
	padding-right: 14px;

	@media (max-width: 375px) {
		height: 240px;
	}
`;
