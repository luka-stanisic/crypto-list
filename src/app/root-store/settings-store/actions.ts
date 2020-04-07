import { createAction, props } from '@ngrx/store';

export const changeFiatCurrency = createAction(
	'[Header Settings] Change Fiat Currency',
	props<{ fiatCurrency: string }>()
);
