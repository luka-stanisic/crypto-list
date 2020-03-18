import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Cryptocurrency } from '../models/cryptocurrency';
import * as CryptocurrencyActions from './cryptocurrency.actions';

export const cryptocurrenciesFeatureKey = 'cryptocurrencies';

export interface CryptocurrencyState extends EntityState<Cryptocurrency> {
	// additional entities state properties
	error: any;
}

export const adapter: EntityAdapter<Cryptocurrency> = createEntityAdapter<Cryptocurrency>();

export const initialState: CryptocurrencyState = adapter.getInitialState({
	// additional entity state properties
	error: null,
});

export const cryptocurrencyReducer = createReducer(
	initialState,
	on(CryptocurrencyActions.loadCryptocurrencies, (state, action) => {
		return {
			...state,
			error: null,
		};
	}),
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
	})
);

export function reducer(state: CryptocurrencyState | undefined, action: Action) {
	return cryptocurrencyReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
