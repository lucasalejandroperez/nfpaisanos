import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
	ContainerNav,
	Item,
	LogoContainer,
	Menu,
	MenuItem,
	MenuItemLink,
	MobileIcon,
	WalletContainer,
	Wrapper,
} from './Navbar.elements';
import { WalletButton } from './WalletButton.elements';

export const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [walletConnected, setWalletConnected] = useState(false);
	const [showNavbarBackgroundColor, setShowNavbarBackgroundColor] =
		useState(false);

	useEffect(() => {
		const changeNavBackgroundColor = () => {
			if (window.scrollY >= 50) {
				setShowNavbarBackgroundColor(true);
			} else {
				setShowNavbarBackgroundColor(false);
			}
		};

		window.addEventListener('scroll', changeNavBackgroundColor);

		return () => {
			window.removeEventListener('scroll', changeNavBackgroundColor);
		};
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<ContainerNav showBackground={showNavbarBackgroundColor}>
			<Wrapper isOpen={showMobileMenu}>
				<IconContext.Provider value={{ style: { fontSize: '2em' } }}>
					<LogoContainer onClick={() => goToTop()}>
						<img
							src='/assets/logo.png'
							alt='NFPaisanos Logo'
							width='38'
							height='38'
						/>
						<Link to='/'>NFPaisanos</Link>
					</LogoContainer>

					<MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
						{showMobileMenu ? <FaTimes /> : <FaBars />}
					</MobileIcon>

					<Menu isOpen={showMobileMenu}>
						<MenuItem>
							<MenuItemLink
								onClick={() => {
									setShowMobileMenu(!showMobileMenu);
									goToTop();
								}}
							>
								<Item
									whileHover={{
										scale: 1.2,
										rotate: 90,
									}}
								>
									<Link to='/discover'>Discover</Link>
								</Item>
							</MenuItemLink>
						</MenuItem>
						<MenuItem>
							<MenuItemLink
								onClick={() => {
									setShowMobileMenu(!showMobileMenu);
								}}
							>
								<Item
									whileHover={{
										scale: 1.2,
										rotate: 90,
									}}
								>
									<Link to='/whatwedo'>What we do</Link>
								</Item>
							</MenuItemLink>
						</MenuItem>
						<MenuItem>
							<MenuItemLink
								onClick={() => {
									setShowMobileMenu(!showMobileMenu);
								}}
							>
								<div>
									{walletConnected ? (
										<WalletContainer>0xABa...6rC7</WalletContainer>
									) : (
										<WalletButton onClick={() => setWalletConnected(true)}>
											Connect wallet
										</WalletButton>
									)}
								</div>
							</MenuItemLink>
						</MenuItem>
					</Menu>
				</IconContext.Provider>
			</Wrapper>
		</ContainerNav>
	);
};
