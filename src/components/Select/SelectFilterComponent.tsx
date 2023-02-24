import { SelectFilter } from '../../features/home/components/HeaderFilters/HeaderFilters.elements';
import { mainTheme } from '../../styles/theme';

export interface ValueLabel {
	value: string;
	label: string;
}
export type SelectProps = ValueLabel[];

export const SelectFilterComponent = (props: SelectProps): JSX.Element => {
	const customStyles = {
		control: (base: any, state: any) => ({
			...base,
			background: mainTheme.contrastColor,
			borderRadius: '12px',
			border: `2px solid ${mainTheme.semiLightColor}`,
			borderColor: mainTheme.semiLightColor,
			boxShadow: null,
			'&:hover': {
				// Overwrittes the different states of border
			},
		}),
		menu: (base: any) => ({
			...base,
			borderRadius: 0,
			marginTop: 0,
		}),
		menuList: (base: any) => ({
			...base,
			padding: 0,
		}),
	};

	return <SelectFilter styles={customStyles} options={props} />;
};
