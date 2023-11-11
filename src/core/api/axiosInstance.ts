import axios from 'axios';
import router from '../Routes/Routes';

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_DATABASE_URL,
});

axiosInstance.interceptors.request.use(
);
axiosInstance.interceptors.response.use(
	(res: any) => {
		if (res.status === 200) {
			return res;
		}
	},
	async (err: any) => {
		if (err.response) {
			if (err.response.status === 423) {
			}
			// Access Token was expired
			if (err.response.status === 401) {
			}
			if (err.response.status === 422) {
			}
			if (err.response.status === 403) {
			}

			if (err.response.status === 500) {
			}
			if (err.response.status === 404) {
			}
		}
		return Promise.reject(err);
	},
);

export default axiosInstance;
