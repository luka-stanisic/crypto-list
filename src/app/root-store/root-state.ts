import { CryptoStoreState } from './cryptocurrency-store';
import { SettingsStoreState } from './settings-store';

export interface State {
	cryptocurrencies: CryptoStoreState.CryptoState;
	settings: SettingsStoreState.SettingsState;
}

export const initialState: State = {
	cryptocurrencies: undefined,
	settings: undefined,
};
