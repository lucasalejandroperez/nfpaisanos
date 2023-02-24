import { useState } from 'react';
import { Pill } from '../../../../components/Pill/Pill.elements';
import { useAppDispatch } from '../../../../hooks/redux-hooks';
import { filterByCreatedDate } from '../../../../redux/slices/auctionSlice';
import { mainTheme } from '../../../../styles/theme';
import {
	HeaderFilterContainer,
	PillToolbar,
	SelectFilter,
} from './HeaderFilters.elements';

export type OptionValue = {
	value: string;
	label: string;
};
const options: OptionValue[] = [
	{ value: 'asc', label: 'Newest' },
	{ value: 'desc', label: 'Oldest' },
];

export const HeaderFilters = (): JSX.Element => {
	const [selectedOrderOption, setSelectedOrderOption] = useState(options[0]);
	const dispatch = useAppDispatch();

	const onChange = (newValue: any): any => {
		setSelectedOrderOption(newValue);

		dispatch(filterByCreatedDate(newValue.value));
	};

	return (
		<HeaderFilterContainer>
			<SelectFilter
				options={options}
				defaultValue={selectedOrderOption}
				onChange={onChange}
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
			<PillToolbar>
				<Pill active={true}>All items</Pill>
				<Pill>Art</Pill>
				<Pill>Photography</Pill>
			</PillToolbar>
		</HeaderFilterContainer>
	);
};
