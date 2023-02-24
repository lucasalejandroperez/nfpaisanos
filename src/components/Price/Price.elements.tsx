import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mainTheme } from '../../styles/theme';

export const Price = styled(motion.span)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 8px 8px 6px;
	gap: 10px;
	width: 78px;
	max-width: 88px;
	height: 26px;
	border: 2px solid ${mainTheme.secondaryColor};
	border-radius: 4px;

	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 12px;
	text-transform: uppercase;
	color: ${mainTheme.secondaryColor};
`;
