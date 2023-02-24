import styled from 'styled-components';
import { NormalButton } from '../../components/Button/NormalButton.elements';
import { mainTheme } from '../../styles/theme';

export const WalletButton = styled(NormalButton)`
	height: 40px;

	&:hover {
		background-color: ${mainTheme.fourthColor};
		color: ${mainTheme.contrastColor};
	}
`;
