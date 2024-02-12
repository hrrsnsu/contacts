import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Contacts } from './pages/Contacts';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path='contacts' element={<Contacts />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
