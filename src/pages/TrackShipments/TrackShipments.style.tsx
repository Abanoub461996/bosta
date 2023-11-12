import styled from 'styled-components';

export const TrackShipmentsWrapper = styled.div`
	min-height: 100vh;
	background: linear-gradient(180deg, rgba(29, 189, 205, 0), rgba(29, 189, 205, 0.1));
`;

export const ShipmentDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	justify-content: center;
	align-items: flex-start;
	margin: 0 auto;
	width: 95%;
	max-width: 856px;
	margin-top: 5em;
	min-height: 60vh;
`;

export const ShipmentCardWrapper = styled.div`
	text-align: start;
	border-radius: 8px;
	box-shadow:
		0 0 1px 1px #e4e7ec,
		0 4px 4px rgba(29, 41, 57, 0.05);
	padding: 24px;
	margin-bottom: 24px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	max-width: 856px;
	.shipment__number {
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0;
		color: #667085;
		font-weight: 600;

	}
	.shipment__status {
		font-size: 40px;
		line-height: 56px;
		letter-spacing: 0;
		font-weight: 600;
		margin-bottom: 1em;
		@media  (max-width: 768px){
			font-size: 2rem;
		}
	}
	.shipment__state__des{
		font-weight: 500;
	}
	.shipment__state__last_update{
		color: #0098a5;
		font-weight: 600;
	}
`;
