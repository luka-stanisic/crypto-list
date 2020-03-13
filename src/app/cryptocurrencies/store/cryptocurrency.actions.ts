import { createAction, props } from '@ngrx/store';
import { Cryptocurrency } from '../models/cryptocurrency';

export const loadCryptocurrencies = createAction(
	'[Cryptocurrency List] Load Cryptocurrencies',
	props<{ fiatCurrency: string }>()
);
export const loadCryptocurrenciesSuccess = createAction(
	'[Cryptocurrency List Effect] Load Cryptocurrencies Success',
	props<{ cryptocurrs: Cryptocurrency[] }>()
);
export const loadCryptocurrenciesFailure = createAction(
	'[Cryptocurrency List Effect] Load Cryptocurrencies Failure',
	props<{ error: any }>()
);
