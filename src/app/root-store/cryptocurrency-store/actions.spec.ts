import {
	loadCryptocurrencies,
	loadCryptocurrenciesSuccess,
	loadCryptocurrenciesFailure,
	loadCryptoDetails,
	loadCryptoDetailsSuccess,
	loadCryptoDetailsFailure,
	reloadCryptocurrencies,
	reloadCryptoDetails,
} from './actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Cryptocurrency } from 'src/app/models/cryptocurrency';

const cryptoId = 1;
describe('Cryptocurrency Actions', () => {
	// Crypto list
	it('should create loadCryptocurrencies action', () => {
		const action = loadCryptocurrencies();
		expect(action.type).toEqual(loadCryptocurrencies.type);
	});

	it('should create loadCryptocurrenciesSuccess action', () => {
		const cryptocurrs: Cryptocurrency[] = [
			{
				id: 1,
				rank: 1,
				symbol: 'BTC',
				price: 6000,
				change24h: 300,
			},
		];
		const action = loadCryptocurrenciesSuccess({ cryptocurrs });
		expect(action.type).toEqual(loadCryptocurrenciesSuccess.type);
		expect(action.cryptocurrs).toEqual(
			jasmine.objectContaining({
				...cryptocurrs,
			})
		);
	});

	it('should create loadCryptocurrenciesFailure action', () => {
		const error = new HttpErrorResponse({});
		const action = loadCryptocurrenciesFailure({ error });

		expect(action.type).toEqual(loadCryptocurrenciesFailure.type);
		expect(action.error).toEqual(error);
	});

	// Crypto details
	it('should create loadCryptoDetails action', () => {
		const action = loadCryptoDetails({ id: cryptoId });
		expect(action.type).toEqual(loadCryptoDetails.type);
		expect(action.id).toEqual(cryptoId);
	});

	it('should create loadCryptoDetailsSuccess action', () => {
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
		expect(action.type).toEqual(loadCryptoDetailsSuccess.type);
		expect(action.crypto).toEqual(
			jasmine.objectContaining({
				...crypto,
			})
		);
	});

	it('should create loadCryptoDetailsFailure action', () => {
		const error = new HttpErrorResponse({});
		const action = loadCryptoDetailsFailure({ error });

		expect(action.type).toEqual(loadCryptoDetailsFailure.type);
		expect(action.error).toEqual(error);
	});

	// Reload crypto details
	it('should create reloadCryptocurrencies action', () => {
		const action = reloadCryptocurrencies();
		expect(action.type).toEqual(reloadCryptocurrencies.type);
	});

	// Reload crypto list
	it('should create reloadCryptoDetails action', () => {
		const action = reloadCryptoDetails();
		expect(action.type).toEqual(reloadCryptoDetails.type);
	});
});
