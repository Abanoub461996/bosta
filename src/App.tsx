// MODULES
import router from './core/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// STYLES

import './App.css';

function App() {
	const { t, i18n } = useTranslation();
	document.body.dir = i18n.dir();
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
