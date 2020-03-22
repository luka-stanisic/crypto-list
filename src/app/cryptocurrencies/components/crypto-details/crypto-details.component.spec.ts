import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoDetailsComponent } from './crypto-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { environment } from 'src/environments/environment';

describe('CryptoDetailsComponent', () => {
	let component: CryptoDetailsComponent;
	let fixture: ComponentFixture<CryptoDetailsComponent>;

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
			declarations: [CryptoDetailsComponent],
			imports: [RouterTestingModule],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CryptoDetailsComponent);
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
