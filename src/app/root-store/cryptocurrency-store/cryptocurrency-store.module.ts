import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CryptocurrencyEffects } from './effects';
import { cryptocurrencyReducer, cryptocurrenciesFeatureKey } from './reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(cryptocurrenciesFeatureKey, cryptocurrencyReducer),
		EffectsModule.forFeature([CryptocurrencyEffects]),
	],
})
export class CryptocurrencyStoreModule {}
