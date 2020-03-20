import { createFeatureSelector, createSelector } from '@ngrx/store';
import { settingsFeatureKey } from './reducer';
import { SettingsState } from './state';

export const selectSettingsState = createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectFiatCurrency = createSelector(
	selectSettingsState,
	(state: SettingsState) => state.fiatCurrency
);
