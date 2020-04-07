import { Action, createReducer, on } from '@ngrx/store';
import * as CryptocurrencyActions from './actions';
import { adapter, initialState, CryptoState } from './state';

export const cryptocurrenciesFeatureKey = 'cryptocurrencies';

export const cryptocurrencyReducer = createReducer(
	initialState,
	on(CryptocurrencyActions.loadCryptocurrenciesSuccess, (state, action) =>
		adapter.addAll(action.cryptocurrs, {
			...state,
			error: null,
		})
	),
	on(CryptocurrencyActions.loadCryptocurrenciesFailure, (state, action) => {
		return {
			...state,
			error: action.error,
		};
	}),
	on(CryptocurrencyActions.loadCryptoDetails, (state, action) => {
		return {
			...state,
			selectedCryptoId: action.id,
			error: null,
		};
	}),
	on(CryptocurrencyActions.loadCryptoDetailsSuccess, (state, action) =>
		adapter.upsertOne(action.crypto, state)
	),
	on(CryptocurrencyActions.loadCryptoDetailsFailure, (state, action) => {
		return {
			...state,
			error: action.error,
		};
	})
);

export function reducer(state: CryptoState | undefined, action: Action) {
	return cryptocurrencyReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
