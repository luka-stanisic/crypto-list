import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromCryptocurrActions from './actions';
import { CryptocurrencyService } from '../../services/cryptocurrency.service';
import { SettingsStoreSelectors } from '../settings-store';
import { selectSelectedCryptoId } from '../cryptocurrency-store/selectors';
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

	loadCryptoDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromCryptocurrActions.loadCryptoDetails, fromCryptocurrActions.reloadCryptoDetails),
			withLatestFrom(this.store$.select(SettingsStoreSelectors.selectFiatCurrency)),
			withLatestFrom(this.store$.select(selectSelectedCryptoId)),
			mergeMap(([[action, fiatCurrency], cryptoId]) =>
				this.cryptocurrencyService.getCryptoDetails(cryptoId, fiatCurrency).pipe(
					map(crypto => fromCryptocurrActions.loadCryptoDetailsSuccess({ crypto })),
					catchError(error => of(fromCryptocurrActions.loadCryptoDetailsFailure({ error })))
				)
			)
		)
	);
}
