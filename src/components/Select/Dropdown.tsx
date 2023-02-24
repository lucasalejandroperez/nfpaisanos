import type { OptionValue } from '../../features/home/components/HeaderFilters/HeaderFilters';
import { Select } from './Dropdown.elements';

interface Props {
	options: OptionValue[];
}

export const Dropdown = ({ options }: Props): JSX.Element => {
	return (
		<Select
			name='createdFilter'
			id='createdFilter'
			aria-labelledby='createdFilter'
		>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</Select>
	);
};
