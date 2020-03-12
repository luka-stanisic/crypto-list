import { createAction, props } from '@ngrx/store';
import { Cryptocurrency } from '../models/cryptocurrency';

export const loadCryptocurrencys = createAction(
	'[Cryptocurrency/API] Load Cryptocurrencys',
	props<{ cryptocurrencys: Cryptocurrency[] }>()
);

export const clearCryptocurrencys = createAction('[Cryptocurrency/API] Clear Cryptocurrencys');
