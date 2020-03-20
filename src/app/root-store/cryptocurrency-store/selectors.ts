import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cryptocurrenciesFeatureKey, selectAll } from './reducer';
import { CryptoState } from './state';

export const selectCryptocurrenciesState = createFeatureSelector<CryptoState>(cryptocurrenciesFeatureKey);

export const selectCryptocurrencies = createSelector(selectCryptocurrenciesState, selectAll);
export const selectCryptoError = createSelector(
	selectCryptocurrenciesState,
	(state: CryptoState) => state.error
);