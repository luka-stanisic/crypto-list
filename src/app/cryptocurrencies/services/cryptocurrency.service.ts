import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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
		return this.http.get<Cryptocurrency[]>(this.baseUrl + 'listings/latest' + params).pipe(
			map((cryptoResp: any) =>
				cryptoResp.data.map((item: any) => Cryptocurrency.adaptForList(item, fiatCurrency))
			)
		);
	}
}
