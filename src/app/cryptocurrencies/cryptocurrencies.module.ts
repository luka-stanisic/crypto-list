import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCryptocurrency from './store/cryptocurrency.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CryptocurrencyEffects } from './store/cryptocurrency.effects';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
	declarations: [CryptoListComponent, CryptoDetailsComponent],
	imports: [
		CommonModule,
		LoadingBarModule,
		LoadingBarHttpClientModule,
		StoreModule.forFeature(
			fromCryptocurrency.cryptocurrenciesFeatureKey,
			fromCryptocurrency.reducer
		),
		EffectsModule.forFeature([CryptocurrencyEffects]),
	],
})
export class CryptocurrenciesModule {}
