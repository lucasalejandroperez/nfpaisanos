import { TextFilterContainer } from './TextFilter.elements';

export const TextFilter = (): JSX.Element => {
	return (
		<TextFilterContainer>
			<input type='text' placeholder='Type to find something nice...'></input>
		</TextFilterContainer>
	);
};
