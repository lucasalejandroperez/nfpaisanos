import { useAppDispatch } from '../../../../hooks/redux-hooks';
import { resetFilters } from '../../../../redux/slices/auctionSlice';
import { ResetFilterContainer } from './ResetFilter.elements';

export const ResetFilters = () => {
	const dispatch = useAppDispatch();

	const handleResetClick = () => {
		dispatch(resetFilters());
	};

	return (
		<ResetFilterContainer>
			<button type='button'>x</button>
			<span onClick={handleResetClick}>Reset filter</span>
		</ResetFilterContainer>
	);
};
