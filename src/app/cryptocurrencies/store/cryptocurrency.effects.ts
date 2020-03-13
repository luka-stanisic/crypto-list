import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromCryptocurrActions from './cryptocurrency.actions';
import { CryptocurrencyService } from '../services/cryptocurrency.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CryptocurrencyEffects {
	constructor(private actions$: Actions, private cryptocurrencyService: CryptocurrencyService) {}

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
