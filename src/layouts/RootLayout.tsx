import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import Navbar from '../components/Navbar';

const RootLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();
	
	useEffectOnce(() => {
		if (location?.pathname !== '/tracking-shipments') {
			navigate('/tracking-shipments');
		}
	});
	return (
		<>
			
			<div style={{ minHeight: 'calc(100vh - 80px)', position: 'relative' }}>
				<Outlet />
			</div>
		</>
	);
};

export default RootLayout;
