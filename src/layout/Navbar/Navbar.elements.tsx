import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mainTheme } from '../../styles/theme';

interface IContainerProps {
	showBackground: boolean;
}

export const ContainerNav = styled.div<IContainerProps>`
	width: 100%;
	height: 78px;
	background-color: ${props =>
		props.showBackground ? mainTheme.semiLightColor : 'transparent'};
	position: fixed;
	transition: 0.5s ease-in-out;
	z-index: 5;
`;

interface IMenu {
	isOpen: boolean;
}

export const Wrapper = styled.div<IMenu>`
	width: 100%;
	max-width: 1300px;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: auto;
`;

export const LogoContainer = styled.div`
	display: flex;
	margin-left: 0.5rem;
	align-items: center;
	font-size: 1.2rem;
	font-family: sans-serif;
	letter-spacing: 2px;
	cursor: pointer;

	a {
		transition: all 0.5s ease;
		margin-left: 8px;
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 32px;
		letter-spacing: -0.02em;
		text-decoration: none;
		color: ${mainTheme.primaryColor};

		&:nth-child(2) {
			color: ${mainTheme.primaryColor};
		}

		&:hover {
			letter-spacing: 4px;
			transition: all 0.5s ease;
		}
	}

	svg {
		fill: ${mainTheme.primaryColor};
		margin-right: 0.5rem;
	}
`;

export const Menu = styled.ul<IMenu>`
	height: 100%;
	display: flex;
	justify-content: space-between;
	list-style: none;

	@media screen and (max-width: 768px) {
		background-color: ${mainTheme.semiLightColor};
		position: absolute;
		top: 70px;
		left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
		width: 100%;
		height: 90vh;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		transition: 0.5s all ease;
	}
`;

export const MenuItem = styled.li`
	height: 100%;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const MenuItemLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	height: 100%;
	padding: 0.5rem 1.5rem;
	// color: ${mainTheme.primaryColor};
	color: 'yellow';
	font-family: sans-serif;
	font-size: 0.8rem;
	font-weight: 300;
	cursor: pointer;
	transition: 0.5s all ease;

	&:hover {
		background-color: transparent;
		/* color: mainTheme.textColor}; */
		color: 'orange';
		transition: 0.5s all ease;

		div {
			svg {
				fill: ${mainTheme.fourthColor};
			}
		}

		@media screen and (max-width: 1440px) {
		}
		@media screen and (max-width: 1200px) {
		}
		@media screen and (max-width: 992px) {
		}
		@media screen and (max-width: 768px) {
			background-color: ${mainTheme.primaryColor};
			color: ${mainTheme.fourthColor};
		}
		@media screen and (max-width: 576px) {
		}
	}

	div {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			display: none;
			fill: ${mainTheme.primaryColor};
			margin-right: 0.5rem;
		}
	}

	@media screen and (max-width: 992px) {
		padding: 0.5rem 1.2rem;
		font-size: 0.7rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;

		div {
			width: 30%;
			justify-content: left;

			svg {
				display: flex;
			}
		}
	}

	@media screen and (max-width: 500px) {
		div {
			width: 60%;
			justify-content: left;

			svg {
				display: flex;
			}
		}
	}

	@media screen and (max-width: 260px) {
		div {
			width: 100%;
			justify-content: left;

			svg {
				display: flex;
			}
		}
	}
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: flex;
		align-items: center;
		cursor: pointer;

		svg {
			fill: ${mainTheme.primaryColor};
			margin-right: 0.5rem;
		}
	}
`;

export const WalletContainer = styled.div`
	border: 1px solid ${mainTheme.secondaryColor};
	border-radius: 24px;
	padding: 0px 18px;
	font-family: 'DM Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	text-align: center;

	color: ${mainTheme.secondaryColor};
`;

export const Item = styled(motion.div)`
	a {
		font-family: 'DM Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		text-decoration: none;
		color: ${mainTheme.primaryColor};
	}
`;
