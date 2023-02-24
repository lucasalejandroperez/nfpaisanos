import { PopularPaisanosContainer } from './PopularPaisanos.elements';
import { PopularPaisanosDetail } from './PopularPaisanosDetail';
import { PopularPaisanosMainImage } from './PopularPaisanosMainImage';

export const PopularPaisanos = (): JSX.Element => {
	return (
		<PopularPaisanosContainer>
			<PopularPaisanosMainImage />

			<PopularPaisanosDetail />
		</PopularPaisanosContainer>
	);
};
