import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
	RootStoreState,
	CryptoStoreActions,
	SettingsStoreSelectors,
	SettingsStoreActions,
} from '../root-store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	fiatCurrency$: Observable<string>;
	availableCurrencies = environment.availableCurrencies;

	constructor(
		private store$: Store<RootStoreState.State>,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.fiatCurrency$ = this.store$.select(SettingsStoreSelectors.selectFiatCurrency);
	}

	changeCurr(curr: string) {
		this.store$.dispatch(SettingsStoreActions.changeFiatCurrency({ fiatCurrency: curr }));

		if (this.router.url.startsWith('/details/')) {
			this.store$.dispatch(CryptoStoreActions.reloadCryptoDetails());
		} else {
			this.store$.dispatch(CryptoStoreActions.loadCryptocurrencies());
		}
	}
}
