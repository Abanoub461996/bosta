import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import i18n from 'i18next';
// Languages files
import translationEn from './en.json';
import translationAr from './ar.json';

const resources = {
	en: {
		translation: translationEn,
	},
	ar: {
		translation: translationAr,
	},
};
// eslint-disable-next-line import/no-named-as-default-member
i18next.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	resources,
	react: { useSuspense: true }, //this line
	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
