import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS, metaReducers } from './store/app.store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import { AppSettingsModule } from './app-settings/app-settings.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot(ROOT_REDUCERS, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true,
			},
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([AppEffects]),
		CryptocurrenciesModule,
		AppSettingsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
