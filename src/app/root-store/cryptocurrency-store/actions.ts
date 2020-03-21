import { createAction, props } from '@ngrx/store';
import { Cryptocurrency } from '../../models/cryptocurrency';

// Load Cryptocurrency List
export const loadCryptocurrencies = createAction(
	'[Cryptocurrency List] Load Cryptocurrencies Request'
);
export const loadCryptocurrenciesSuccess = createAction(
	'[Cryptocurrency Effect] Load Cryptocurrencies Success',
	props<{ cryptocurrs: Cryptocurrency[] }>()
);
export const loadCryptocurrenciesFailure = createAction(
	'[Cryptocurrency Effect] Load Cryptocurrencies Failure',
	props<{ error: any }>()
);

// Load Cryptocurrency Details
export const loadCryptoDetails = createAction(
	'[Cryptocurrency Details] Load Crypto Details Request',
	props<{ id: number }>()
);
export const loadCryptoDetailsSuccess = createAction(
	'[Cryptocurrency Effect] Load Crypto Details Success',
	props<{ crypto: Cryptocurrency }>()
);
export const loadCryptoDetailsFailure = createAction(
	'[Cryptocurrency Effect] Load Crypto Details Failure',
	props<{ error: any }>()
);

// Reload Cryptocurrency List
export const reloadCryptocurrencies = createAction(
	'[Header Settings] Reload Cryptocurrencies Request'
);

// Reload Cryptocurrency Details
export const reloadCryptoDetails = createAction('[Header Settings] Reload Crypto Details Request');
