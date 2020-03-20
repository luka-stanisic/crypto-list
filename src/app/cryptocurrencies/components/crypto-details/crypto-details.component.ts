import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
	selector: 'app-crypto-details',
	templateUrl: './crypto-details.component.html',
	styleUrls: ['./crypto-details.component.scss'],
})
export class CryptoDetailsComponent implements OnInit {
	cryptocurrency$: Observable<Cryptocurrency>;
	fiatCurrency$: Observable<string>;
	error$: Observable<any>;
	cryptoId: number;

	constructor(private store$: Store<RootStoreState.State>, private route: ActivatedRoute) {}

	ngOnInit() {
		this.cryptoId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

		this.cryptocurrency$ = this.store$.select(CryptoStoreSelectors.selectedCryptocurrency);
		this.fiatCurrency$ = this.store$.select(SettingsStoreSelectors.selectFiatCurrency);
		this.error$ = this.store$.select(CryptoStoreSelectors.selectCryptoError);

		this.getCryptoDetails();
	}

	getCryptoDetails() {
		this.store$.dispatch(CryptoStoreActions.loadCryptoDetails({ id: this.cryptoId }));
	}
}
