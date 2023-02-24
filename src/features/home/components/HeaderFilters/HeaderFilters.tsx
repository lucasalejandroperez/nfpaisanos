import { useState } from 'react';
import { Pill } from '../../../../components/Pill/Pill.elements';
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
	{ value: 'newest', label: 'Newest' },
	{ value: 'oldest', label: 'Oldest' },
];

export const HeaderFilters = (): JSX.Element => {
	const [selectedOrderOption] = useState(options[0]);

	return (
		<HeaderFilterContainer>
			{/* <SelectFilter
				options={options}
				defaultValue={selectedOrderOption}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						borderColor: state.isFocused
							? mainTheme.lightColor
							: mainTheme.semiLightColor,
						backgroundColor: mainTheme.contrastColor,
						borderRadius: '12px',
					}),
				}}
			/> */}
			<SelectFilter
				options={options}
				defaultValue={selectedOrderOption}
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
