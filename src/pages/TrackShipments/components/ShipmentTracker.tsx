import { useTranslation } from "react-i18next";
import { ShipmentCardWrapper, ShipmentDetails } from "../TrackShipments.style";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../core/api/axiosInstance";
import StatusCard from "./StatusCard";
import ActivityLog from "./ActivityLog";

const ShipmentTracker = ({shipmentNumber}:{shipmentNumber:string|null})=>{
    const { t } = useTranslation();
	// !REACT QUERY
	const { isPending, error, data } = useQuery({
		queryKey: [`shipment-details-${shipmentNumber}-`, shipmentNumber],
		queryFn: async () => {
			return await axiosInstance.get(`shipments/track/${shipmentNumber}`)
		},
		retry:false
	});
 return (<>
    {isPending && 'Loading...'}
			{error && 'An error has occurred: ' + error.message}
			{data && <ShipmentDetails>
				<StatusCard data={data.data}/>
				<ActivityLog logs={data.data.TransitEvents}/>

			</ShipmentDetails>}
            </>
 )
}

export default ShipmentTracker;