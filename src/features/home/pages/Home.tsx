// import { Auctions } from '../components/Auctions/Auctions';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { getPopularPaisanos } from '../../../redux/slices/paisanosSlice';
import { Auctions } from '../components/Auctions/Auctions';
import { Header } from '../components/Header/Header';
import { HeaderFilters } from '../components/HeaderFilters/HeaderFilters';
import { MainFilters } from '../components/MainFilters/MainFilters';
import { PopularPaisanos } from '../components/PopularPaisanos/PopularPaisanos';
import { TextFilter } from '../components/TextFilter/TextFilter';
import {
	AuctionContent,
	HomeContainer,
	MainContentContainer,
} from './Home.elements';

export const Home = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const {
		// data,
		loading: loadingPopularPaisanos,
		// error, SHOW A TOAST WITH ERROR
	} = useAppSelector(state => state.paisanos.popularPaisanos);

	useEffect(() => {
		dispatch(getPopularPaisanos());
	}, []);

	return (
		<HomeContainer>
			<Header />

			{loadingPopularPaisanos ? `Loading popular...` : <PopularPaisanos />}

			{/* MAIN CONTENT */}
			<MainContentContainer>
				<TextFilter />
				<HeaderFilters />

				<AuctionContent>
					<MainFilters />
					<Auctions />
				</AuctionContent>
			</MainContentContainer>
		</HomeContainer>
	);
};
