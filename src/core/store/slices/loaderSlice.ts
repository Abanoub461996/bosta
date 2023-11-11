import { ReactNode } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LoaderState {
	show: boolean;
}

const initialState: LoaderState = {
	show: false,
};

export const loaderSlice = createSlice({
	name: 'loader',
	initialState,
	reducers: {
		showLoader: (state) => {
			state.show = true;
		},
		closeLoader: () => initialState,
	},
});

export const getLoader = (state: RootState) => state.loader.show;

export const { showLoader, closeLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
