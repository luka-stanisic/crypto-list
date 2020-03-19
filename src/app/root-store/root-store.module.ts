import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptocurrencyStoreModule } from './cryptocurrency-store/cryptocurrency-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		CryptocurrencyStoreModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
	],
})
export class RootStoreModule {}
