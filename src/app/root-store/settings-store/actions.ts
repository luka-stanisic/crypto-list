import { createAction, props } from '@ngrx/store';

export const changeFiatCurrency = createAction(
	'[Header Component] Change Fiat Currency',
	props<{ fiatCurrency: string }>()
);
