import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class CryptocurrencyEffects {
	constructor(private actions$: Actions) {}
}
