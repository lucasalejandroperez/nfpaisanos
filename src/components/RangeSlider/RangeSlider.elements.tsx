import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

export const RangeSliderContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 150px;

	.rangeslider {
		background-color: ${mainTheme.semiLightColor};
	}
	.rangeslider__fill {
		background-color: ${mainTheme.terciaryColor};
	}

	.rangeslider__handle::after {
		background-color: ${mainTheme.terciaryColor};
		width: 21px;
		height: 21px;
		top: 3px;
		left: 4px;
		box-shadow: none;
	}

	.rangeslider .rangeslider__handle-tooltip {
		width: 40px;
		height: 40px;
		text-align: center;
		position: absolute;
		background-color: ${mainTheme.primaryColor};
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 20px;
		transition: all 100ms ease-in;
		border-radius: 4px;
		display: inline-block;
		color: ${mainTheme.contrastColor};
		left: 50%;
		transform: translate3d(-50%, 0, 0);
	}
	.rangeslider .rangeslider__handle-tooltip span {
		margin-top: 12px;
		display: inline-block;
		line-height: 100%;
	}
	.rangeslider .rangeslider__handle-tooltip:after {
		content: ' ';
		position: absolute;
		width: 0;
		height: 0;
	}

	.rangeSliderContainer_labels {
		display: flex;
		justify-content: space-between;

		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;

		color: ${mainTheme.primaryColor};
	}

	@media (max-width: 375px) {
	}
`;
