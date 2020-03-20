import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
	cryptocurrencyReducer,
	cryptocurrenciesFeatureKey,
} from '../root-store/cryptocurrency-store/reducer';
import { CryptocurrencyEffects } from '../root-store/cryptocurrency-store/effects';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [CryptoListComponent, CryptoDetailsComponent],
	imports: [
		CommonModule,
		AppRoutingModule,
		StoreModule.forFeature(cryptocurrenciesFeatureKey, cryptocurrencyReducer),
		EffectsModule.forFeature([CryptocurrencyEffects]),
	],
})
export class CryptocurrenciesModule {}
