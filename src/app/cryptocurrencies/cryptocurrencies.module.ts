import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCryptocurrency from './store/cryptocurrency.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CryptocurrencyEffects } from './store/cryptocurrency.effects';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(
			fromCryptocurrency.cryptocurrenciesFeatureKey,
			fromCryptocurrency.reducer
		),
		EffectsModule.forFeature([CryptocurrencyEffects]),
	],
})
export class CryptocurrenciesModule {}
