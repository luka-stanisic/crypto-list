import { createReducer, on } from '@ngrx/store';
import { AppSettings } from '../models/app-settings';
import { updateAppSettings } from './app-settings.actions';

export const appSettingsFeatureKey = 'appsettings';

export interface AppSettingsState {
	appSettings: AppSettings;
}

const initialState: AppSettingsState = {
	appSettings: undefined,
};

export const productReducer = createReducer(
	initialState,
	on(updateAppSettings, (state, action) => {
		return {
			...state,
			products: action.appSettings,
		};
	})
);
