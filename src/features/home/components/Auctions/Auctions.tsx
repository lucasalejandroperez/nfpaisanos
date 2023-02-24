import { Auction } from './Auction';
import { AuctionsContainer, NoResultsContainer } from './Auctions.elements';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { getAuctions } from '../../../../redux/slices/auctionSlice';

export const Auctions = (): JSX.Element => {
	const { loading, dataFiltered } = useAppSelector(
		state => state.auction.auctions
	);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAuctions());
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<AuctionsContainer>
			{dataFiltered.length > 0 ? (
				dataFiltered.map(auction => (
					<Auction key={auction.id} auction={auction} />
				))
			) : (
				<NoResultsContainer>
					<span>No results found...</span>
				</NoResultsContainer>
			)}
		</AuctionsContainer>
	);
};
