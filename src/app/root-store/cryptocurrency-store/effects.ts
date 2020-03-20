import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromCryptocurrActions from './actions';
import { CryptocurrencyService } from '../../services/cryptocurrency.service';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { SettingsStoreSelectors } from '../settings-store';
import { CryptoState } from './state';

@Injectable()
export class CryptocurrencyEffects {
	constructor(
		private actions$: Actions,
		private cryptocurrencyService: CryptocurrencyService,
		private store$: Store<CryptoState>
	) {}

	loadCryptocurrs$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromCryptocurrActions.loadCryptocurrencies),
			withLatestFrom(this.store$.select(SettingsStoreSelectors.selectFiatCurrency)),
			mergeMap(([action, fiatCurrency]) =>
				this.cryptocurrencyService.getCryptocurrencies(fiatCurrency).pipe(
					map(cryptocurrs => fromCryptocurrActions.loadCryptocurrenciesSuccess({ cryptocurrs })),
					catchError(error => of(fromCryptocurrActions.loadCryptocurrenciesFailure({ error })))
				)
			)
		)
	);
}
