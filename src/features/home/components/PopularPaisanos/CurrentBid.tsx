import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import {
	AuctionEnding,
	CurrentBidContainer,
	CurrentBidPrice,
} from './CurrentBid.elements';
import { getCurrentBid } from '../../../../redux/slices/bidSlice';

export const CurrentBid = (): JSX.Element => {
	const { loading, data } = useAppSelector(state => state.bid.currentBid);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCurrentBid());
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<CurrentBidContainer>
			<CurrentBidPrice>
				<span>Current Bid</span>
				<span>{data?.eth} ETH</span>
				<span>${data?.usd}</span>
			</CurrentBidPrice>

			<AuctionEnding>
				<span>Auction ending in</span>
				<div>
					<div>
						<span>19</span>
						<span>hs</span>
					</div>
					<div>
						<span>24</span>
						<span>min</span>
					</div>
					<div>
						<span>19</span>
						<span>secs</span>
					</div>
				</div>
			</AuctionEnding>
		</CurrentBidContainer>
	);
};
