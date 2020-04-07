import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { provideMockStore } from '@ngrx/store/testing';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

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
			declarations: [HeaderComponent],
			imports: [RouterTestingModule],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
