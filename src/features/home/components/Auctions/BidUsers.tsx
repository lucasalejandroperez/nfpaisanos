import { Avatar } from '../../../../components/Avatar/Avatar.elements';
import { mainTheme } from '../../../../styles/theme';
import type { IAuction } from '../../../../types/auctionInterfaces';
import { BidUsersContainer } from './Auction.elements';

interface Props {
	auction: IAuction;
}

export const BidUsers = ({ auction }: Props): JSX.Element => {
	return (
		<BidUsersContainer>
			<div>
				{auction.bidUsers &&
					auction.bidUsers.map(bid => (
						<span key={`${bid.id}-${bid.name}`}>
							<Avatar
								src={bid.avatar}
								alt={bid.name}
								width='25'
								height='30'
								backgroundColor={mainTheme.darkColor}
							/>
						</span>
					))}
			</div>
			<div>{auction.stock} in stock</div>
		</BidUsersContainer>
	);
};
