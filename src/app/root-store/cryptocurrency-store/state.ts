import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Cryptocurrency } from '../../models/cryptocurrency';
import { environment } from 'src/environments/environment';

export interface State extends EntityState<Cryptocurrency> {
	// additional entities state properties
	error: any;
	fiatCurrency: string;
}

export const adapter: EntityAdapter<Cryptocurrency> = createEntityAdapter<Cryptocurrency>();

export const initialState: State = adapter.getInitialState({
	// additional entity state properties
	error: null,
	fiatCurrency: environment.defaultCurrency,
});
