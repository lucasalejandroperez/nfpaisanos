import { Auction } from './Auction';
import { AuctionsContainer } from './Auctions.elements';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { getAuctions } from '../../../../redux/slices/paisanosSlice';

export const Auctions = (): JSX.Element => {
	const { loading, dataFiltered } = useAppSelector(
		state => state.paisanos.auctions
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
			{dataFiltered.map(auction => (
				<Auction key={auction.id} auction={auction} />
			))}
		</AuctionsContainer>
	);
};
