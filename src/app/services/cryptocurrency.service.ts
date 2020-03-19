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
		const params = '?limit=100&aux=cmc_rank&convert=' + fiatCurrency;
		return this.http
			.get<Cryptocurrency[]>(this.baseUrl + 'listings/latest' + params)
			.pipe(
				map((cryptoResp: any) =>
					cryptoResp.data.map((item: any) => Cryptocurrency.adaptForList(item, fiatCurrency))
				)
			);
	}

	// getCryptocurrencyInfo(cryptoId: number): Observable<Cryptocurrency> {
	// 	const cryptoDetails = this.http.get<Cryptocurrency>('https://...');
	// 	const bitcoinPrice = this.http.get<Cryptocurrency>('https://...');

	// 	return forkJoin([cryptoDetails, bitcoinPrice]).subscribe(results => {
	// 		// results[0] is crypto details
	// 		// results[1] is bitcoin price
	// 	});
	// }
}
