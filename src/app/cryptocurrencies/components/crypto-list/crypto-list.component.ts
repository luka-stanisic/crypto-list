import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cryptocurrency } from '../../models/cryptocurrency';
import { CryptocurrencyService } from '../../services/cryptocurrency.service';
import { Store, select } from '@ngrx/store';
import { CryptocurrencyState } from '../../store/cryptocurrency.reducer';
import { loadCryptocurrencies } from '../../store/cryptocurrency.actions';
import {
	selectCryptocurrencies,
	selectCryptoError,
} from '../../store/cryptocurrency.selectors';

@Component({
	selector: 'app-crypto-list',
	templateUrl: './crypto-list.component.html',
	styleUrls: ['./crypto-list.component.scss'],
})
export class CryptoListComponent implements OnInit {
	cryptocurrs$: Observable<Cryptocurrency[]>;
	fiatCurrency$: Observable<string>;
	cryptocurrsError$: Observable<any>;

	// TODO: Create app-settings observable instead
	fiatCurrency = 'USD';

	constructor(
		private cryptoService: CryptocurrencyService,
		private cryptoStore: Store<CryptocurrencyState>
	) {}

	ngOnInit() {
		this.getCryptocurrList();

		this.cryptocurrsError$ = this.cryptoStore.pipe(select(selectCryptoError));
	}

	getCryptocurrList() {
		this.cryptoStore.dispatch(loadCryptocurrencies({ fiatCurrency: 'USD' }));
		this.cryptocurrs$ = this.cryptoStore.pipe(select(selectCryptocurrencies));
	}
}
