import Slider from 'react-rangeslider';
import { useState } from 'react';
import { RangeSliderContainer } from './RangeSlider.elements';

export const RangeSlider = (): JSX.Element => {
	const [horizontal, setHorizontal] = useState(50);

	const formatLabel = (value: number): string => `${value} ETH`;

	const handleChangeHorizontal = (value: number) => {
		setHorizontal(value);
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
