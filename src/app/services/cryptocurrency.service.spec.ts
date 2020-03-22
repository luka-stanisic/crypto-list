import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CryptocurrencyService } from './cryptocurrency.service';

describe('CryptocurrencyService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		})
	);

	it('should be created', () => {
		const service: CryptocurrencyService = TestBed.get(CryptocurrencyService);
		expect(service).toBeTruthy();
	});

	it('should return list of cryptocurrencies', inject(
		[CryptocurrencyService],
		(service: CryptocurrencyService) => {
			const expectedCryptos: any = [
				{
					id: 1,
					rank: 1,
					symbol: 'BTC',
					price: 6000,
					change24h: 300,
				},
			];

			service.getCryptocurrencies('EUR').subscribe(cryptos => {
				expect(cryptos[0].id).toBe(expectedCryptos[0].id);
				expect(cryptos[0].rank).toBe(expectedCryptos[0].rank);
				expect(cryptos[0].symbol).toBe(expectedCryptos[0].symbol);
				expect(cryptos[0].price).toBe(expectedCryptos[0].price);
				expect(cryptos[0].change24h).toBe(expectedCryptos[0].change24h);
			}, fail);
		}
	));

	it('should return cryptocurrency details', inject(
		[CryptocurrencyService],
		(service: CryptocurrencyService) => {
			const expectedCrypto: any = {
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

			service.getCryptoDetails(1, 'EUR').subscribe(crypto => {
				expect(crypto.id).toBe(expectedCrypto.id);
				expect(crypto.name).toBe(expectedCrypto.name);
			}, fail);
		}
	));
});
