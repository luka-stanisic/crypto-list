import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Cryptocurrency } from '../models/cryptocurrency';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class CryptocurrencyService {
	constructor(private http: HttpClient) {}
	baseUrl = 'api/v1/cryptocurrency/';

	getCryptocurrencies(fiatCurrency: string): Observable<Cryptocurrency[]> {
		return this.http
			.get<Cryptocurrency[]>(
				this.baseUrl + 'listings/latest?limit=100&aux=cmc_rank&convert=' + fiatCurrency
			)
			.pipe(
				map((cryptoResp: any) =>
					cryptoResp.data.map((item: any) => Cryptocurrency.adaptForList(item, fiatCurrency))
				)
			);
	}

	getCryptoDetails(id: number, fiatCurrency: string): Observable<Cryptocurrency> {
		const cryptoDetails = this.http.get<Cryptocurrency>(
			this.baseUrl + 'quotes/latest?id=' + id + '&convert=' + fiatCurrency
		);
		const bitcoinDetails = this.http.get<Cryptocurrency>(
			this.baseUrl + 'quotes/latest?id=' + id + '&convert=BTC'
		);
		return forkJoin([cryptoDetails, bitcoinDetails]).pipe(
			map((response: any) => {
				const details = response[0].data[id];
				const bitcoinPrice = response[1].data[id].quote.BTC.price;
				return Cryptocurrency.adaptForDetails(details, fiatCurrency, bitcoinPrice);
			})
		);
	}
}
