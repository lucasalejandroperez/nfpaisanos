import { PaisanosLogo } from '../../components/PaisanosLogo/PaisanosLogo';
import { RowDivider } from '../../components/RowDivider/RowDivider.elements';
import { CreatedBy, MainFooter } from './Footer.elements';

export const Footer = (): JSX.Element => {
	return (
		<MainFooter>
			<PaisanosLogo />
			<p>The New Creative Economy.</p>
			<RowDivider />
			<CreatedBy>Created by 💗 by Lucas Alejandro Perez</CreatedBy>
		</MainFooter>
	);
};
