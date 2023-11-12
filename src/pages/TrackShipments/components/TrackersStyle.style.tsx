import styled from 'styled-components';
import footerImg from '/public/footerImg.png';

export const HeaderWrapper = styled.div`
	width: 100%;
	background-color: #f3fafb;
	display: flex;
	justify-content: center;
	.header__title {
		font-size: 40px;
		line-height: 56px;
		letter-spacing: 0;
		margin-bottom: 24px;
	}
	.tracker_input {
		width: 100%;
		box-shadow:
			0 2px 4px rgba(29, 41, 57, 0.05),
			0 4px 16px rgba(29, 41, 57, 0.1);
		border-radius: 10px;
		max-width: 500px;
		.tracker__input__field {
			border-radius: 10px 0 0 10px;
			border: 1px solid #e4e7ec;
			padding: 20px;
			width: 100%;
			&:focus {
				box-shadow: 0 0 0 2px rgba(0, 152, 165, 0.2);
			}
		}
		.tracker_input__icon {
			cursor: pointer;

			width: 25%;
			border-radius: 0 10px 10px 0;
			padding: 0;
			border: 0;
			background-color: #e30613;
			display: flex;
			justify-content: center;
			align-items: center;
			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				svg {
					font-size: 26px;
				}
			}
		}
	}
`;

export const FooterWrapper = styled.div`
	background-image: url('./public/footer.png');
	background-size: contain;
	background-repeat: repeat-x;
	height: 180px;
	opacity: 0.5;
	background-color: #f3fafb;
`;

export const AcivityLoggerWrapper = styled.div`
	margin: 0 0 4em 22px;
	color: #111619;
	.log__title{
		font-size: 20px;
		line-height: 28px;
		letter-spacing: 0;
		font-weight: 700;
		color: #667085;
		margin-left: -22px;
	}

	.vertical-timeline::before {
		content: '';
		display: none;
	}
	.activity__logs__container {
		margin: 0 0 1em 0;
		&.vertical-timeline-element:after {
			content: '';
			height: calc(100% - 10px);
			display: block;
			width: 1px;
			background: #d0d5dd;
			position: absolute;
			top: 21px;
			left: -24px;
		}
		&:last-child:after {
			height: 70%;
		}
		.activity__log__header {
			font-size: 1rem;
			line-height: 24px;
			letter-spacing: 0;
			font-weight: 600;
		}
		.activity__log {
			border-radius: 8px;
			border: 1px solid #e4e7ec;
			padding: 8px 16px;
			margin-bottom: 16px px;
			.activity__log__details {
				.activity_des {
					font-size: 14px;
					list-style: none;
					line-height: 1.5715;
					font-weight: normal;
					margin: 0;
				}
				.activity_time {
					color: #667085;
					font-size: 14px;
					list-style: none;
					line-height: 1.5715;
					font-weight: normal;
					margin: 0;
				}
			}
		}
		.vertical-timeline-element-content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			background: transparent;
			box-shadow: none;
			padding: 0;
			gap: 1em;
			float: none !important;
			width: 90%;
			margin: 0;
			.vertical-timeline-element-content-arrow,
			.vertical-timeline-element-date {
				display: none;
			}
		}
		.vertical-timeline-element-icon {
			left: 0;
			margin-left: -30px;
		}
	}
`;
