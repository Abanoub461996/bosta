// MODULES
// COMPONENTS
import Navbar from '../../components/Navbar';
import TrackerHeader from './components/TrackerHeader';
import TrackerFooter from './components/TrackerFooter';
import ShipmentTracker from './components/ShipmentTracker';

// HOOKS
import { useSearchParams } from 'react-router-dom';

// STYLES
import { TrackShipmentsWrapper } from './TrackShipments.style';

const TrackShipments = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	
	return (
		<TrackShipmentsWrapper>
			<Navbar />
			<TrackerHeader setSearchParams={setSearchParams} inputValue={searchParams?.get('shipment-number')} />
			{searchParams?.get('shipment-number') ? <ShipmentTracker shipmentNumber={searchParams?.get('shipment-number')}/> : <div className='min-h-[50vh]'></div> }
			
			<TrackerFooter />
		</TrackShipmentsWrapper>
	);
};

export default TrackShipments;
