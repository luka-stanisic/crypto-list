import { createAction, props } from '@ngrx/store';
import { Cryptocurrency } from '../../models/cryptocurrency';

// Load Cryptocurrency List
export const loadCryptocurrencies = createAction('[Crypto List] Load Crypto List Request');
export const loadCryptocurrenciesSuccess = createAction(
	'[Crypto API] Load Crypto List Success',
	props<{ cryptocurrs: Cryptocurrency[] }>()
);
export const loadCryptocurrenciesFailure = createAction(
	'[Crypto API] Load Crypto List Failure',
	props<{ error: any }>()
);

// Load Cryptocurrency Details
export const loadCryptoDetails = createAction(
	'[Crypto Details] Load Crypto Details Request',
	props<{ id: number }>()
);
export const loadCryptoDetailsSuccess = createAction(
	'[Crypto API] Load Crypto Details Success',
	props<{ crypto: Cryptocurrency }>()
);
export const loadCryptoDetailsFailure = createAction(
	'[Crypto API] Load Crypto Details Failure',
	props<{ error: any }>()
);

// Reload Cryptocurrency List
export const reloadCryptocurrencies = createAction('[Header Settings] Reload Crypto List Request');

// Reload Cryptocurrency Details
export const reloadCryptoDetails = createAction('[Header Settings] Reload Crypto Details Request');
