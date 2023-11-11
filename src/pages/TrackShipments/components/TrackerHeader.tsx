import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { HeaderWrapper } from './TrackersStyle.style';
import { SetURLSearchParams } from 'react-router-dom';
interface HeaderProps {
    setSearchParams:SetURLSearchParams;
    inputValue:string|null
}
const TrackerHeader = ({inputValue , setSearchParams}:HeaderProps) => {
	const { t } = useTranslation();
	const [value, setValue] = useState<string>(inputValue?inputValue:'');
    function searchShipment(event) {
        event.preventDefault();
        setSearchParams({'shipment-number':value});
      }
	return (
		<HeaderWrapper className="flex flex-col justify-center items-center">
			<h1 className="header__title">{t('header')}</h1>
			<form className="tracker_input flex" onSubmit={searchShipment}>
				<InputText className="tracker__input__field" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
				<div  className="tracker_input__icon">
					<button type="submit">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21 21L28 28" stroke="white" strokeWidth="3" strokeLinecap="round"></path>
							<circle cx="13" cy="13" r="11" stroke="white" strokeWidth="3"></circle>
						</svg>
					</button>
				</div>
			</form>
		</HeaderWrapper>
	);
};

export default TrackerHeader;
