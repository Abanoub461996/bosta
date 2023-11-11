import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout';
import TrackShipments from '../../pages/TrackShipments/TrackShipments';

const router = createBrowserRouter([
	{ index: true, element: <RootLayout/> },
	{ path: '/tracking-shipments', element: <TrackShipments/> },
]);

export default router;
