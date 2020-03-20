import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Cryptocurrency } from '../../models/cryptocurrency';

export interface CryptoState extends EntityState<Cryptocurrency> {
	// additional entities state properties
	error: any;
}

export const adapter: EntityAdapter<Cryptocurrency> = createEntityAdapter<Cryptocurrency>();

export const initialState: CryptoState = adapter.getInitialState({
	// additional entity state properties
	error: null,
});
