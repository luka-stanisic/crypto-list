import { CryptoState, initialState } from './state';
import { Cryptocurrency } from 'src/app/models/cryptocurrency';
import { HttpErrorResponse } from '@angular/common/http';
import { cryptocurrencyReducer } from './reducer';
import {
	loadCryptocurrenciesSuccess,
	loadCryptocurrenciesFailure,
	loadCryptoDetails,
	loadCryptoDetailsSuccess,
	loadCryptoDetailsFailure,
} from './actions';

const originalState: CryptoState = {
	ids: [],
	entities: {},
	selectedCryptoId: null,
	error: null,
};

describe('CryptocurrencyReducer', () => {
	describe('undefined action', () => {
		describe('with undefined original state', () => {
			it('should return the initial state', () => {
				const action = {} as any;
				const state = cryptocurrencyReducer(undefined, action);

				expect(state).toBe(initialState);
			});
		});

		describe('with a valid original state', () => {
			it('should return the original state', () => {
				const action = {} as any;
				const state = cryptocurrencyReducer(originalState, action);

				expect(state).toBe(originalState);
			});
		});
	});

	// Crypto list
	describe('LOAD_CRYPTOCURRENCIES_FAILURE action', () => {
		it('should reflect the Error that occured', () => {
			const error = new HttpErrorResponse({});
			const action = loadCryptocurrenciesFailure({ error });
			const state = cryptocurrencyReducer(originalState, action);

			expect(state.error).toBe(error);
		});
	});

	describe('LOAD_CRYPTOCURRENCIES_SUCCESS action', () => {
		it('should reflect the retrieved information', () => {
			const cryptocurrs = [
				{
					id: 1,
					rank: 1,
					symbol: 'BTC',
					price: 6000,
					change24h: 300,
				},
			];
			const action = loadCryptocurrenciesSuccess({ cryptocurrs });
			const state = cryptocurrencyReducer(originalState, action);

			expect(crypto).toEqual(
				jasmine.objectContaining({
					...crypto,
				})
			);
			expect(state.error).toBeNull();
		});
	});

	// Crypto details
	describe('LOAD_CRYPTO_DETAILS action', () => {
		it('should reflect that it has started loading the provided currency', () => {
			const action = loadCryptoDetails({ id: 1 });
			const state = cryptocurrencyReducer(originalState, action);

			expect(state.error).toBeNull();
			expect(state.selectedCryptoId).toBe(action.id);
		});
	});

	describe('LOAD_CRYPTO_DETAILS_FAILURE action', () => {
		it('should reflect the Error that occured', () => {
			const error = new HttpErrorResponse({});
			const action = loadCryptoDetailsFailure({ error });
			const state = cryptocurrencyReducer(originalState, action);

			expect(state.error).toBe(error);
		});
	});

	describe('LOAD_CRYPTO_DETAILS_SUCCESS action', () => {
		it('should reflect the retrieved information', () => {
			const crypto: Cryptocurrency = {
				id: 1,
				rank: 1,
				symbol: 'BTC',
				price: 6000,
				change24h: 300,
				name: 'Bitcoin',
				volume24h: 100,
				marketCap: 100,
				priceBTC: 1,
				change1h: 100,
				change7d: 100,
				totalSupply: 100,
				availableSupply: 100,
			};
			const action = loadCryptoDetailsSuccess({ crypto });
			const state = cryptocurrencyReducer(originalState, action);

			expect(crypto).toEqual(
				jasmine.objectContaining({
					...crypto,
				})
			);
			expect(state.error).toBeNull();
		});
	});
});
