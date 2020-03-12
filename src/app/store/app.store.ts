import { ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { InjectionToken } from '@angular/core';
import {
	CryptocurrencyState,
	cryptocurrenciesFeatureKey,
	cryptocurrencyReducer,
} from '../cryptocurrencies/store/cryptocurrency.reducer';

export interface ApplicationState {
	cryptocurrencies: CryptocurrencyState;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<ApplicationState, Action>>(
	'Root reducers token',
	{
		factory: () => ({
			[cryptocurrenciesFeatureKey]: cryptocurrencyReducer,
		}),
	}
);

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
