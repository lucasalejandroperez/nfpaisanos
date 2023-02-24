import { mainTheme } from '../../styles/theme';

interface Props {
	fillColor?: string;
}
export const RightSwiperSvg = ({
	fillColor = mainTheme.lightColor,
}: Props): JSX.Element => {
	return (
		<svg
			width='14'
			height='9'
			viewBox='0 0 14 9'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M9.09095 0.265207C9.49677 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49678 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L1 5.49997C0.447718 5.49997 3.05054e-06 5.05225 3.0279e-06 4.49997C3.00525e-06 3.94768 0.447718 3.49997 1 3.49997L10.716 3.49997L9.03443 1.67829C8.65983 1.27247 8.68513 0.639813 9.09095 0.265207Z'
				fill={fillColor}
			/>
		</svg>
	);
};
