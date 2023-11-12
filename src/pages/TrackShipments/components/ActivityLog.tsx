import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AcivityLoggerWrapper } from './TrackersStyle.style';

interface Activity {
	exceptionCode?: string;
	reason?: string;
	state: string;
	timestamp: string;
	hub?: string;
	msg?: string;
}
interface ActivityLogProps {
	logs: Activity[];
}
const ActivityLog = ({ logs }: ActivityLogProps) => {
	const { t, i18n } = useTranslation();

	const activities = new Map();
	logs.map((el) => {
		const day = moment(el.timestamp).format('L');
		if (el.state === 'WAITING_FOR_CUSTOMER_ACTION') {
			el.msg = el.reason ? t(`status_des.${el.state}.${el.reason}`) : t(`status_des.${el.state}.default`);
		} else if (el.state === 'PACKAGE_RECEIVED') {
			el.msg = el.hub ? t(`status_des.${el.state}.${el.hub}`) : t(`status_des.${el.state}.default`);
		} else {
			el.msg = t(`status_des.${el.state}`);
		}
		if (activities.has(day)) {
			activities.set(day, [...activities.get(day), el]);
		} else {
			activities.set(day, [el]);
		}
	});

	return (
		<AcivityLoggerWrapper dir={i18n.dir()}>
			<h1 className="log__title">{t('ACTIVITY LOG')}</h1>
			{activities.size && (
				<VerticalTimeline>
					{Array.from(activities.keys())
						.reverse()
						.map((key: string, index: number) => {
							return (
								<VerticalTimelineElement
									key={key}
									className="vertical-timeline-element--education activity__logs__container"
									iconStyle={{ background: '#d0d5dd', width: '14px', height: '14px', boxShadow: 'none', top: '0.4em' }}
								>
									<div className="activity__log__header">
										{moment(key).format('ddd, DD MMM')}
									</div>
									{activities
										.get(key)
										.reverse()
										.map((activity: any, index) => {
											return (
												<div className="activity__log" key={index}>
													<div className="activity__log__details">
														<p className="activity_des">{activity.msg}</p>
														<p className="activity_time">{moment(activity.timestamp).format('LT')}</p>
													</div>
												</div>
											);
										})}
								</VerticalTimelineElement>
							);
						})}
				</VerticalTimeline>
			)}
		</AcivityLoggerWrapper>
	);
};

export default ActivityLog;
