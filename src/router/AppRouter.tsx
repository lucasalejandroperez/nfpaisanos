import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Discover } from '../features/home/pages/Discover/Discover';
import { Home } from '../features/home/pages/Home/Home';
import { WhatWeDo } from '../features/home/pages/WhatWeDo/WhatWeDo';
import { Layout } from '../layout/Layout';

export const AppRouter = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='discover' element={<Discover />} />
					<Route path='whatwedo' element={<WhatWeDo />} />

					<Route path='*' element={<Navigate replace to='/' />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
