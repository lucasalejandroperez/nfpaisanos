import styled from 'styled-components';
import { mainTheme } from '../../../../styles/theme';

export const MainFiltersContainer = styled.div`
	width: 256px;

	label {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 12px;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		margin: 12px 0;

		color: ${mainTheme.lightColor};
	}

	@media (max-width: 375px) {
	}
`;

export const ColorContainer = styled.div`
	margin-bottom: 24px;
`;
