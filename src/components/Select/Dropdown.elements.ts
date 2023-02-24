import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

export const Select = styled.select`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px 8px 16px;
    gap: 18px;
    width: 256px;
    height: 48px;
	background-color: ${mainTheme.contrastColor};
    border: 2px solid #353945;
    border-radius: 12px;


    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${mainTheme.primaryColor}

`;