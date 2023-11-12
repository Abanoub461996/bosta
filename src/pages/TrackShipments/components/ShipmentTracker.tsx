import { useTranslation } from 'react-i18next';
import { ShipmentDetails } from '../TrackShipments.style';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../../core/api/axiosInstance';
import StatusCard from './StatusCard';
import ActivityLog from './ActivityLog';
import ShipmentLoader from './ShipmentLoading';
import { useState } from 'react';

const ShipmentTracker = ({ shipmentNumber }: { shipmentNumber: string | null }) => {
	const { t , i18n } = useTranslation();
	// !REACT QUERY
	const { isPending, isError,error, data } = useQuery({
		queryKey: [`shipment-details-${shipmentNumber}-`, shipmentNumber],
		queryFn: async () => {
			return await axiosInstance.get(`shipments/track/${shipmentNumber}`);
		},
		retry: false,
	});
	return (
		<ShipmentDetails>
			{isPending && <ShipmentLoader/>}
			{isError && <p className='bg-[#fef3f2] border-[#fecdca] p-4 w-[calc(100%)] rounded'>{t(error.response.data.error)}</p>}
			{data && (
				<>
					<StatusCard data={data.data} />
					<ActivityLog logs={data.data.TransitEvents}/>
				</>
			)}
		</ShipmentDetails>
	);
};

export default ShipmentTracker;
