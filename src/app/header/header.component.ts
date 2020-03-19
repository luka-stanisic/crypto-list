import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RootStoreState, CryptoStoreActions, CryptoStoreSelectors } from '../root-store';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	fiatCurrency$: Observable<string>;
	availableCurrencies = environment.availableCurrencies;

	constructor(private store$: Store<RootStoreState.State>) {}

	ngOnInit() {
		this.fiatCurrency$ = this.store$.select(CryptoStoreSelectors.selectFiatCurrency);
	}

	changeCurr(curr: string) {
		this.store$.dispatch(CryptoStoreActions.changeFiatCurrency({ fiatCurrency: curr }));
		this.store$.dispatch(CryptoStoreActions.loadCryptocurrencies({ fiatCurrency: curr }));
	}
}
