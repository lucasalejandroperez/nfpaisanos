import { Outlet } from 'react-router-dom';
import { ScrollToTopButton } from '../components/Button/ScrollToTopButton';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

export const Layout = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<ScrollToTopButton />
			<section>
				<Outlet />
			</section>
			<Footer />
		</>
	);
};
