import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoListComponent } from './crypto-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

describe('CryptoListComponent', () => {
	let component: CryptoListComponent;
	let fixture: ComponentFixture<CryptoListComponent>;

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
			imports: [RouterTestingModule],
			declarations: [CryptoListComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CryptoListComponent);
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
