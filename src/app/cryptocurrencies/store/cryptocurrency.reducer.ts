import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Cryptocurrency } from '../models/cryptocurrency';
import * as CryptocurrencyActions from './cryptocurrency.actions';

export const cryptocurrenciesFeatureKey = 'cryptocurrencies';

export interface CryptocurrencyState extends EntityState<Cryptocurrency> {
	// additional entities state properties
}

export const adapter: EntityAdapter<Cryptocurrency> = createEntityAdapter<Cryptocurrency>();

export const initialState: CryptocurrencyState = adapter.getInitialState({
	// additional entity state properties
});

export const cryptocurrencyReducer = createReducer(
	initialState,
	on(CryptocurrencyActions.loadCryptocurrencys, (state, action) =>
		adapter.addAll(action.cryptocurrencys, state)
	)
);

export function reducer(state: CryptocurrencyState | undefined, action: Action) {
	return cryptocurrencyReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
