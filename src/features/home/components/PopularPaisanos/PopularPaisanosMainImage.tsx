import { useAppSelector } from '../../../../hooks/redux-hooks';
import { PopularPaisanosMainImageContainer } from './PopularPaisanosMainImage.elements';

export const PopularPaisanosMainImage = (): JSX.Element => {
	const { loading, data, popularPaisanoSelectedIndex } = useAppSelector(
		state => state.auction.popularPaisanos
	);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<PopularPaisanosMainImageContainer>
			{!loading && data && (
				<img
					src={data[popularPaisanoSelectedIndex].media.image}
					alt={data[popularPaisanoSelectedIndex].author}
				/>
			)}
		</PopularPaisanosMainImageContainer>
	);
};
