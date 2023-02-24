import { LeftSwiperSvg } from '../../../../assets/svg/LeftSwiperSvg';
import { RightSwiperSvg } from '../../../../assets/svg/RightSwiperSvg';
import { LeftSwiperButton } from '../../../../components/Button/LeftSwiperButton.elements';
import { PrimaryButton } from '../../../../components/Button/PrimaryButton.elements';
import { RightSwiperButton } from '../../../../components/Button/RightSwiperButton.elements';
import { SecondaryButton } from '../../../../components/Button/SecondaryButton.elements';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { mainTheme } from '../../../../styles/theme';
import { CurrentBid } from './CurrentBid';
import { ImageDetail } from './ImageDetail';
import {
	nextPopularPaisano,
	previousPopularPaisano,
} from '../../../../redux/slices/auctionSlice';
import {
	AvatarDetailContainer,
	ButtonsContainer,
	PopularPaisanosDetailContainer,
	SwiperButtonsContainer,
} from './PopularPaisanosDetail.elements';

export const PopularPaisanosDetail = (): JSX.Element => {
	const { loading, data, popularPaisanoSelectedIndex } = useAppSelector(
		state => state.auction.popularPaisanos
	);

	const dispatch = useAppDispatch();

	const leftSwiperClick = () => {
		dispatch(previousPopularPaisano());
	};

	const rightSwiperClick = () => {
		dispatch(nextPopularPaisano());
	};

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<PopularPaisanosDetailContainer>
			<h1>the creator network®</h1>

			<AvatarDetailContainer>
				<ImageDetail
					imageSource='/assets/bidmock.png'
					title='Creator'
					subTitle={data[popularPaisanoSelectedIndex].author}
					alt='Creator Avatar'
				/>

				<ImageDetail
					imageSource='/assets/instantprice.png'
					title='Instant price'
					subTitle={data[popularPaisanoSelectedIndex].instantPrice}
					alt='Instant Price'
				/>
			</AvatarDetailContainer>

			<div>
				<CurrentBid />

				<ButtonsContainer>
					<PrimaryButton type='button'>Place a bid</PrimaryButton>
					<SecondaryButton type='button'>View item</SecondaryButton>
				</ButtonsContainer>
				<SwiperButtonsContainer>
					<LeftSwiperButton
						type='button'
						onClick={leftSwiperClick}
						whileHover={{
							scale: 1.5,
						}}
						aria-label='Left Swiper'
					>
						<LeftSwiperSvg fillColor={mainTheme.lightColor} />
					</LeftSwiperButton>
					<RightSwiperButton
						type='button'
						onClick={rightSwiperClick}
						whileHover={{
							scale: 1.5,
						}}
						aria-label='Right Swiper'
					>
						<RightSwiperSvg fillColor={mainTheme.lightColor} />
					</RightSwiperButton>
				</SwiperButtonsContainer>
			</div>
		</PopularPaisanosDetailContainer>
	);
};
