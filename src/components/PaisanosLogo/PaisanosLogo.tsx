import { PaisanosLogoContainer } from './PaisanosLogo.elements';

export const PaisanosLogo = (): JSX.Element => {
	return (
		<PaisanosLogoContainer>
			<img
				src='/assets/logo.png'
				alt='NFPaisanos Logo'
				width='38'
				height='38'
			/>
			NFPaisanos
		</PaisanosLogoContainer>
	);
};
