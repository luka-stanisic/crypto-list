import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cryptocurrenciesFeatureKey, selectAll } from './reducer';
import { State } from './state';

export const selectCryptocurrenciesState = createFeatureSelector<State>(cryptocurrenciesFeatureKey);

export const selectCryptocurrencies = createSelector(selectCryptocurrenciesState, selectAll);
export const selectCryptoError = createSelector(
	selectCryptocurrenciesState,
	(state: State) => state.error
);

export const selectFiatCurrency = createSelector(
	selectCryptocurrenciesState,
	(state: State) => state.fiatCurrency
);
