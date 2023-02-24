import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mainTheme } from '../../styles/theme';

export const RightSwiperButton = styled(motion.button)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 8px;
	gap: 10px;
	width: 40px;
	height: 40px;
	border: 2px solid ${mainTheme.semiLightColor};
	border-radius: 40px;
	background-color: ${mainTheme.contrastColor};

	&:hover {
		cursor: pointer;
	}
`;
