import { CryptoStoreState } from './cryptocurrency-store';

export interface State {
	cryptocurrencies: CryptoStoreState.State;
}

export const initialState: State = {
	cryptocurrencies: undefined,
};
