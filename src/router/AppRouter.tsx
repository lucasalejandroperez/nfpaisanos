import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../features/home/pages/Home';
import { Layout } from '../layout/Layout';

export const AppRouter = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />

					<Route path='*' element={<Navigate replace to='/' />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
