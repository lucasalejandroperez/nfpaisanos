import { useState } from 'react';
import { motion } from 'framer-motion';
import { NormalButton } from '../../../../components/Button/NormalButton.elements';
import { HeaderContainer } from './Header.elements';

export const Header = (): JSX.Element => {
	const [activateEffect, setActivateEffect] = useState(false);

	return (
		<HeaderContainer>
			<h4>Create, explore, & SELL digital art NFTs.</h4>
			<motion.h2 whileHover={{ scale: 1.5 }}>
				The new creative economy.
			</motion.h2>
			<div>
				<NormalButton
					type='button'
					animate={{ rotate: activateEffect ? 360 : 0 }}
					transition={{ type: 'spring', duration: 1 }}
					onClick={() => setActivateEffect(!activateEffect)}
				>
					Explore
				</NormalButton>
			</div>
		</HeaderContainer>
	);
};
