import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { NFPaisanosApp } from './NFPaisanosApp';

import { mainTheme } from './styles/theme';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	background-color: ${mainTheme.contrastColor};
	color: ${mainTheme.primaryColor};
	font-family: 'DM Sans', 'Poppins', sans-serif;
}
`;

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		<GlobalStyle />
		<Provider store={store}>
			<NFPaisanosApp />
		</Provider>
	</>
);
