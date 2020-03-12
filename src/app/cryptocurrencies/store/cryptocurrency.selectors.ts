import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CryptocurrencyState, cryptocurrenciesFeatureKey, selectAll } from './cryptocurrency.reducer';

export const selectCryptocurrState = createFeatureSelector<CryptocurrencyState>(cryptocurrenciesFeatureKey);

export const selectCryptocurrs = createSelector(selectCryptocurrState, selectAll);
