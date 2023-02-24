// import { Auctions } from '../components/Auctions/Auctions';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { getPopularPaisanos } from '../../../../redux/slices/auctionSlice';
import { Auctions } from '../../components/Auctions/Auctions';
import { Header } from '../../components/Header/Header';
import { HeaderFilters } from '../../components/HeaderFilters/HeaderFilters';
import { MainFilters } from '../../components/MainFilters/MainFilters';
import { PopularPaisanos } from '../../components/PopularPaisanos/PopularPaisanos';
import { TextFilter } from '../../components/TextFilter/TextFilter';
import {
	AuctionContent,
	HomeContainer,
	MainContentContainer,
} from './Home.elements';

export const Home = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const { loading: loadingPopularPaisanos } = useAppSelector(
		state => state.auction.popularPaisanos
	);

	useEffect(() => {
		dispatch(getPopularPaisanos());
	}, []);

	return (
		<HomeContainer>
			<Header />

			{loadingPopularPaisanos ? `Loading popular...` : <PopularPaisanos />}

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
