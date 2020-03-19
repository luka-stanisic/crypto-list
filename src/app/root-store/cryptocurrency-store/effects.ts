import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromCryptocurrActions from './actions';
import { CryptocurrencyService } from '../../services/cryptocurrency.service';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { RootStoreState } from '..';
import { Store } from '@ngrx/store';

@Injectable()
export class CryptocurrencyEffects {
	constructor(
		private actions$: Actions,
		private cryptocurrencyService: CryptocurrencyService,
		private store$: Store<RootStoreState.State>
	) {}

	loadCryptocurrs$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromCryptocurrActions.loadCryptocurrencies),
			mergeMap(action =>
				this.cryptocurrencyService.getCryptocurrencies(action.fiatCurrency).pipe(
					map(cryptocurrs => fromCryptocurrActions.loadCryptocurrenciesSuccess({ cryptocurrs })),
					catchError(error => of(fromCryptocurrActions.loadCryptocurrenciesFailure({ error })))
				)
			)
		)
	);
}
