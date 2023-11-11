import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axiosInstance from '../../core/api/axiosInstance';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';
import TrackerHeader from './components/TrackerHeader';
import TrackerFooter from './components/TrackerFooter';
import { ShipmentCard, ShipmentDetails, TrackShipmentsWrapper } from './TrackShipments.style';

const TrackShipments = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	const { t } = useTranslation();
	// !REACT QUERY
	const { isPending, error, data } = useQuery({
		queryKey: [`shipment-details-${searchParams?.get('shipment-number')}-`, searchParams?.get('shipment-number')],
		queryFn: async () => {
			return await axiosInstance.get(`shipments/track/${searchParams?.get('shipment-number')}`)
		},
		retry:false
	});
	return (
		<TrackShipmentsWrapper>
			<Navbar />
			<TrackerHeader setSearchParams={setSearchParams} inputValue={searchParams?.get('shipment-number')} />

			{isPending && 'Loading...'}
			{error && 'An error has occurred: ' + error.message}
			{data && <ShipmentDetails>
				<ShipmentCard>
					
				</ShipmentCard>
				<pre>{JSON.stringify(data,null,4)}</pre>

			</ShipmentDetails>}
			<TrackerFooter />
		</TrackShipmentsWrapper>
	);
};

export default TrackShipments;
