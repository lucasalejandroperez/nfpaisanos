import styled from 'styled-components';
import ReactSelect from 'react-select';
import { mainTheme } from '../../../../styles/theme';

export const HeaderFilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 108px;
	margin-bottom: 108px;
	width: 1100px;

	@media (max-width: 375px) {
		flex-direction: column;
		margin-top: 24px;
		margin-bottom: 38px;
		width: 310px;
	}
`;

export const SelectFilter = styled(ReactSelect)`
	width: 256px;

	div:first-child {
		color: ${mainTheme.primaryColor};
	}

	div:nth-child(4) {
		background-color: ${mainTheme.contrastColor};
	}

	@media (max-width: 375px) {
		margin-bottom: 32px;
		width: 100%;
	}
`;

export const PillToolbar = styled.div`
	@media (max-width: 375px) {
		width: 100%;
	}
`;
