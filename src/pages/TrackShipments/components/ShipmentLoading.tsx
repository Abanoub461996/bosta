import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { AcivityLoggerWrapper } from './TrackersStyle.style';
import { ShipmentCardWrapper } from '../TrackShipments.style';
const ShipmentLoader = () => {
	return (
		<div className="animate-pulse flex flex-col items-center w-[calc(100%)]">
			<ShipmentCardWrapper>
				<div className="shipment__number w-80 h-4 bg-slate-200 rounded"></div>
				<div className="shipment__status w-40 mt-1 capitalize h-10 bg-slate-200 rounded"></div>
				<div className="flex justify-start gap-1 xs:flex-col">
					<div className="shipment__state__des w-80 h-2 bg-slate-200 rounded"></div>
					<div className="shipment__state__last_update w-20 h-2 bg-slate-200 rounded"></div>
				</div>
			</ShipmentCardWrapper>
			<AcivityLoggerWrapper className="min-w-[calc(95%)]">
				<h1 className="log__title  w-40 h-8 bg-slate-200 rounded"></h1>
				<VerticalTimeline>
					<VerticalTimelineElement
						key={1}
						className="vertical-timeline-element--education activity__logs__container "
						iconStyle={{ background: '#d0d5dd', width: '14px', height: '14px', boxShadow: 'none', top: '0.4em' }}
					>
						<div className="activity__log__header  w-40 h-4 bg-slate-200 rounded"> </div>
						<div className="activity__log min-w-[calc(95%)]">
							<div className="activity__log__details">
								<p className="activity_des w-100 h-4 bg-slate-200 rounded"></p>
								<p className="activity_time mt-2 w-40 h-4 bg-slate-200 rounded" style={{ marginTop: '1em' }}></p>
							</div>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						key={2}
						className="vertical-timeline-element--education activity__logs__container "
						iconStyle={{ background: '#d0d5dd', width: '14px', height: '14px', boxShadow: 'none', top: '0.4em' }}
					>
						<div className="activity__log__header  w-40 h-4 bg-slate-200 rounded"> </div>
						<div className="activity__log min-w-[calc(95%)]">
							<div className="activity__log__details">
								<p className="activity_des w-100 h-4 bg-slate-200 rounded"></p>
								<p className="activity_time mt-2 w-40 h-4 bg-slate-200 rounded" style={{ marginTop: '1em' }}></p>
							</div>
						</div>
						<div className="activity__log min-w-[calc(95%)]">
							<div className="activity__log__details">
								<p className="activity_des w-100 h-4 bg-slate-200 rounded"></p>
								<p className="activity_time mt-2 w-40 h-4 bg-slate-200 rounded" style={{ marginTop: '1em' }}></p>
							</div>
						</div>
						<div className="activity__log min-w-[calc(95%)]">
							<div className="activity__log__details">
								<p className="activity_des w-100 h-4 bg-slate-200 rounded"></p>
								<p className="activity_time mt-2 w-40 h-4 bg-slate-200 rounded" style={{ marginTop: '1em' }}></p>
							</div>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						key={3}
						className="vertical-timeline-element--education activity__logs__container "
						iconStyle={{ background: '#d0d5dd', width: '14px', height: '14px', boxShadow: 'none', top: '0.4em' }}
					>
						<div className="activity__log__header  w-40 h-4 bg-slate-200 rounded"> </div>
						<div className="activity__log min-w-[calc(95%)]">
							<div className="activity__log__details">
								<p className="activity_des w-100 h-4 bg-slate-200 rounded"></p>
								<p className="activity_time mt-2 w-40 h-4 bg-slate-200 rounded" style={{ marginTop: '1em' }}></p>
							</div>
						</div>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</AcivityLoggerWrapper>
		</div>
	);
};
export default ShipmentLoader;
