import { settingsReducer } from './reducer';
import { initialState } from './state';
import { changeFiatCurrency } from './actions';

describe('SettingsReducer', () => {
	it('should return default state', () => {
		const action = {} as any;
		const state = settingsReducer(undefined, action);
		expect(state).toBe(initialState);
	});

	it('should update fiat currency', () => {
		const action = changeFiatCurrency({ fiatCurrency: 'EUR' });
		const state = settingsReducer(undefined, action);
		expect(state.fiatCurrency).toEqual('EUR');
	});
});
