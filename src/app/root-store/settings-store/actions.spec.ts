import { changeFiatCurrency } from './actions';

describe('Settings Actions', () => {
	it('should create changeFiatCurrency action', () => {
		const action = changeFiatCurrency({
			fiatCurrency: 'EUR',
		});

		expect(action.type).toEqual(changeFiatCurrency.type);
		expect(action.fiatCurrency).toEqual('EUR');
	});
});
