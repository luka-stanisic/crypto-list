import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { environment } from '../environments/environment';

import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import { RootStoreModule } from './root-store';
import { HeaderModule } from './header/header.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		LoadingBarModule,
		LoadingBarHttpClientModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		CryptocurrenciesModule,
		HeaderModule,
		RootStoreModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpConfigInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
