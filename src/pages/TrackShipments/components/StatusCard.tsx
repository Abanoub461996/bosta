import { useTranslation } from 'react-i18next';
import { ShipmentCardWrapper } from '../TrackShipments.style';
import moment from 'moment';

const StatusCard = ({ data }: { data: any }) => {
	const { t } = useTranslation();

	return (
		<ShipmentCardWrapper>
			<div className="shipment__number">{t(`Shipment No.`, { key: data.TrackingNumber })}</div>
			<div className="shipment__status capitalize">{t(`status_title.${data.CurrentStatus?.state}`)}</div>
			<div className='flex justify-start gap-1 xs:flex-col'>
				<div className="shipment__state__des">{t(`status_des.${data.CurrentStatus?.state}`)}</div>
				<div className="shipment__state__last_update">{moment(data.CurrentStatus?.timestamp).format('ddd ll')}</div>
			</div>
		</ShipmentCardWrapper>
	);
};

export default StatusCard;
