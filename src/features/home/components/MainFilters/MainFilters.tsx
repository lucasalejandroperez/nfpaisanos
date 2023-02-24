import { RowDivider } from '../../../../components/RowDivider/RowDivider.elements';
import { SelectFilter } from '../HeaderFilters/HeaderFilters.elements';
import { ColorContainer, MainFiltersContainer } from './MainFilters.elements';
import { ResetFilters } from './ResetFilters';
import { useState } from 'react';
import { mainTheme } from '../../../../styles/theme';
import { RangeSlider } from '../../../../components/RangeSlider/RangeSlider';

const optionsLikes = [
	{ value: 'desc', label: 'Most liked' },
	{ value: 'asc', label: 'Least liked' },
];

const optionsColors = [
	{ value: 'all', label: 'All colors' },
	{ value: 'black', label: 'Black' },
	{ value: 'green', label: 'Green' },
	{ value: 'pink', label: 'Pink' },
	{ value: 'purple', label: 'Purple' },
	{ value: 'blue', label: 'Blue' },
	{ value: 'orange', label: 'Orange' },
];

export const MainFilters = (): JSX.Element => {
	const [selectedOption, setSelectedOption] = useState(optionsColors[0]);
	const [selectedLikesOption, setSelectedLikesOption] = useState(
		optionsLikes[0]
	);

	const handleSelectedLikesChange = (newValue: any) => {
		setSelectedLikesOption(newValue);
	};

	const handleSelectedColorChange = (newValue: any): any => {
		setSelectedOption(newValue);
	};

	return (
		<MainFiltersContainer>
			{/* PRICE RANGE FILTER COMPONENT */}
			<RangeSlider />
			<RowDivider />

			{/* LIKES FILTER COMPONENT */}
			<div>
				<label htmlFor='likesSelect'>LIKES</label>
				<SelectFilter
					id='likesSelect'
					defaultValue={selectedLikesOption}
					onChange={handleSelectedLikesChange}
					options={optionsLikes}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderColor: state.isFocused
								? mainTheme.lightColor
								: mainTheme.semiLightColor,
							backgroundColor: mainTheme.contrastColor,
							borderRadius: '12px',
						}),
						option: (base, state) => ({
							...base,
							backgroundColor: state.isFocused
								? mainTheme.semiLightColor
								: mainTheme.contrastColor,
							color: state.isFocused
								? mainTheme.primaryColor
								: mainTheme.primaryColor,
						}),
					}}
				/>
			</div>

			{/* COLOR FILTER COMPONENT */}
			<ColorContainer>
				<label htmlFor='colorsSelect'>COLORS</label>
				<SelectFilter
					id='colorsSelect'
					defaultValue={selectedOption}
					onChange={handleSelectedColorChange}
					options={optionsColors}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderColor: state.isFocused
								? mainTheme.lightColor
								: mainTheme.semiLightColor,
							backgroundColor: mainTheme.contrastColor,
							borderRadius: '12px',
						}),
						option: (base, state) => ({
							...base,
							backgroundColor: state.isFocused
								? mainTheme.semiLightColor
								: mainTheme.contrastColor,
							color: state.isFocused
								? mainTheme.primaryColor
								: mainTheme.primaryColor,
						}),
					}}
				/>
			</ColorContainer>

			<RowDivider />
			<ResetFilters />
		</MainFiltersContainer>
	);
};
