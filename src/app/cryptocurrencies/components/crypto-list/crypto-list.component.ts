import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cryptocurrency } from '../../models/cryptocurrency';
import { CryptocurrencyService } from '../../services/cryptocurrency.service';
import { Store, select } from '@ngrx/store';
import { CryptocurrencyState } from '../../store/cryptocurrency.reducer';
import { loadCryptocurrencies } from '../../store/cryptocurrency.actions';
import {
	selectCryptocurrencies,
	selectCryptoLoading,
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
	cryptocurrsLoading$: Observable<boolean>;
	cryptocurrsError$: Observable<any>;

	constructor(
		private cryptoService: CryptocurrencyService,
		private cryptoStore: Store<CryptocurrencyState>
	) {}

	ngOnInit() {
		this.getCryptocurrList();

		this.cryptocurrsLoading$ = this.cryptoStore.pipe(select(selectCryptoLoading));
		this.cryptocurrsError$ = this.cryptoStore.pipe(select(selectCryptoError));
	}

	getCryptocurrList() {
		this.cryptoStore.dispatch(loadCryptocurrencies({ fiatCurrency: 'USD' }));
		this.cryptocurrs$ = this.cryptoStore.pipe(select(selectCryptocurrencies));
	}
}
