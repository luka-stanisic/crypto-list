import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cryptocurrency } from 'src/app/models/cryptocurrency';
import {
	RootStoreState,
	CryptoStoreActions,
	CryptoStoreSelectors,
	SettingsStoreSelectors,
} from '../../../root-store';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-crypto-list',
	templateUrl: './crypto-list.component.html',
	styleUrls: ['./crypto-list.component.scss'],
})
export class CryptoListComponent implements OnInit {
	cryptocurrencies$: Observable<Cryptocurrency[]>;
	error$: Observable<any>;
	fiatCurrency$: Observable<string>;

	constructor(private store$: Store<RootStoreState.State>) {}

	ngOnInit() {
		this.cryptocurrencies$ = this.store$.select(CryptoStoreSelectors.selectCryptocurrencies);
		this.error$ = this.store$.select(CryptoStoreSelectors.selectCryptoError);
		this.fiatCurrency$ = this.store$.select(SettingsStoreSelectors.selectFiatCurrency);

		this.getCryptocurrencies();
	}

	getCryptocurrencies() {
		this.store$.dispatch(CryptoStoreActions.loadCryptocurrencies());
	}
}
