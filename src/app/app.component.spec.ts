import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { HeaderModule } from './header/header.module';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import { environment } from 'src/environments/environment';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from './root-store';

describe('AppComponent', () => {
	beforeEach(async(() => {
		const initialState = {
			cryptocurrencies: {
				custodians: {
					ids: [],
					entities: {},
					selectedCryptoId: null,
					error: null,
				},
			},
			settings: {
				fiatCurrency: environment.defaultCurrency,
			},
		};
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				HeaderModule,
				LoadingBarHttpClientModule,
				LoadingBarModule,
				CryptocurrenciesModule,
				RootStoreModule,
			],
			declarations: [AppComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'CryptoList'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('CryptoList');
	});
});
