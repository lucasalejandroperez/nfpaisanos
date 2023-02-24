import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

interface Props {
	backgroundColor?: string;
}

export const Avatar = styled.img`
	background-color: ${(props: Props) =>
		props.backgroundColor ?? mainTheme.contrastColor};
`;
