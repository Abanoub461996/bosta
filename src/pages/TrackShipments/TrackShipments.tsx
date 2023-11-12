import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TrackerHeader from './components/TrackerHeader';
import TrackerFooter from './components/TrackerFooter';
import { TrackShipmentsWrapper } from './TrackShipments.style';
import ShipmentTracker from './components/ShipmentTracker';

const TrackShipments = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	
	return (
		<TrackShipmentsWrapper>
			<Navbar />
			<TrackerHeader setSearchParams={setSearchParams} inputValue={searchParams?.get('shipment-number')} />
			{searchParams?.get('shipment-number') && <ShipmentTracker shipmentNumber={searchParams?.get('shipment-number')} />}
			
			<TrackerFooter />
		</TrackShipmentsWrapper>
	);
};

export default TrackShipments;
