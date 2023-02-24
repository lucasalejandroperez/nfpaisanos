import styled from 'styled-components';
import { mainTheme } from '../../../../styles/theme';

export const ImageDetailContainer = styled.div`
	display: flex;
	gap: 8px;

	h2 {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		color: ${mainTheme.primaryColor};
	}

	p {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 20px;
		color: ${mainTheme.lightColor};
	}
`;
