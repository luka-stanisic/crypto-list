import { environment } from 'src/environments/environment';

export interface SettingsState {
	fiatCurrency: string;
}

export const initialState: SettingsState = {
	fiatCurrency: environment.defaultCurrency,
};
