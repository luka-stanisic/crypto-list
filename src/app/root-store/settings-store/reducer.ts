import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './actions';
import { initialState, SettingsState } from './state';

export const settingsFeatureKey = 'settings';

export const settingsReducer = createReducer(
	initialState,
	on(SettingsActions.changeFiatCurrency, (state, action) => {
		return {
			...state,
			fiatCurrency: action.fiatCurrency,
		};
	})
);

export function reducer(state: SettingsState | undefined, action: Action) {
	return settingsReducer(state, action);
}
