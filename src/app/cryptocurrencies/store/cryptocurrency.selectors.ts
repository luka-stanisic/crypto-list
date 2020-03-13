import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	CryptocurrencyState,
	cryptocurrenciesFeatureKey,
	selectAll,
} from './cryptocurrency.reducer';

export const selectCryptocurrenciesState = createFeatureSelector<CryptocurrencyState>(
	cryptocurrenciesFeatureKey
);

export const selectCryptocurrencies = createSelector(selectCryptocurrenciesState, selectAll);
export const selectCryptoLoading = createSelector(
	selectCryptocurrenciesState,
	(state: CryptocurrencyState) => state.loading
);
export const selectCryptoError = createSelector(
	selectCryptocurrenciesState,
	(state: CryptocurrencyState) => state.error
);
