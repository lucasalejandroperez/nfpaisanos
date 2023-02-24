import { Price } from '../../../../components/Price/Price.elements';
import { RowDivider } from '../../../../components/RowDivider/RowDivider.elements';
import type { IAuction } from '../../../../types/auctionInterfaces';
import {
	AuctionContainer,
	AuctionImage,
	HighestBids,
	TitleAuction,
} from './Auction.elements';
import { BidUsers } from './BidUsers';

interface Props {
	auction: IAuction;
}

export const Auction = ({ auction }: Props): JSX.Element => {
	return (
		<AuctionContainer>
			<AuctionImage>
				<img src={auction.media.image} alt='auction mock' />
			</AuctionImage>
			<TitleAuction>
				<span>Amazing art</span>
				<Price>{auction.instantPrice}</Price>
			</TitleAuction>
			<BidUsers auction={auction} />
			<RowDivider />
			<HighestBids>
				<img src='/assets/highestbid.png' alt='highest bid' />
				<span>Highest bid</span>
				<span>{auction.highestBid}</span>
				<span>New bid 🔥</span>
			</HighestBids>
		</AuctionContainer>
	);
};
