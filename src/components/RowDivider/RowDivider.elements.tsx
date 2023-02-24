import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

export const RowDivider = styled.hr`
	border: 0;
	height: 1px;
	width: 100%;
	background: ${mainTheme.semiLightColor};
	background-image: linear-gradient(
		to right,
		${mainTheme.semiLightColor},
		${mainTheme.semiLightColor},
		${mainTheme.semiLightColor}
	);
`;
