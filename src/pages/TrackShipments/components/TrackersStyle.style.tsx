import styled from 'styled-components';
import footerImg from "/public/footerImg.png";



export const HeaderWrapper = styled.div`
	width: 100%;
    background-color: #f3fafb;
    display: flex;
    justify-content:center;
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
    position: absolute;
    inset: auto 0 0;
    opacity: .5;
    background-color: #f3fafb;
`