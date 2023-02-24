import Slider from 'react-rangeslider';
import { useState } from 'react';
import { RangeSliderContainer } from './RangeSlider.elements';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { filterByPrice } from '../../redux/slices/auctionSlice';

export const RangeSlider = (): JSX.Element => {
	const [horizontal, setHorizontal] = useState(50);
	const dispatch = useAppDispatch();

	const formatLabel = (value: number): string => `${value} ETH`;

	const handleChangeHorizontal = (value: number) => {
		setHorizontal(value);

		dispatch(filterByPrice(value));
	};

	return (
		<RangeSliderContainer>
			<label htmlFor='sliderComponent'>PRICE RANGE</label>
			<div className='slider custom-labels'>
				<Slider
					min={0}
					max={10}
					value={horizontal}
					format={formatLabel}
					onChange={handleChangeHorizontal}
				/>
			</div>
			<div className='rangeSliderContainer_labels'>
				<span>0 ETH</span>
				<span>10 ETH</span>
			</div>
		</RangeSliderContainer>
	);
};
