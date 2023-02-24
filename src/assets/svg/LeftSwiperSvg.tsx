interface Props {
	fillColor: string;
}

export const LeftSwiperSvg = ({ fillColor }: Props): JSX.Element => {
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
				d='M4.90905 0.265207C4.50323 -0.109399 3.87057 -0.0840962 3.49597 0.321722L0.265197 3.82168C-0.0884001 4.20474 -0.0884038 4.79518 0.26519 5.17824L3.49596 8.67828C3.87056 9.08411 4.50322 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.28397 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34017 1.27247 5.31487 0.639813 4.90905 0.265207Z'
				fill={fillColor}
			/>
		</svg>
	);
};
