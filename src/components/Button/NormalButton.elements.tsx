import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mainTheme } from '../../styles/theme';

export const NormalButton = styled(motion.button)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 15px;
	padding-left: 15px;
	height: 48px;
	border: 2px solid ${mainTheme.lightColor};
	border-radius: 90px;
	background-color: ${mainTheme.contrastColor};

	font-family: 'DM Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	color: ${mainTheme.primaryColor};

	&:hover {
		cursor: pointer;
	}
`;
