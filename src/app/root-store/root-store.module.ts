import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CryptocurrencyStoreModule } from './cryptocurrency-store/cryptocurrency-store.module';
import { SettingsStoreModule } from './settings-store/settings-store.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		CryptocurrencyStoreModule,
		SettingsStoreModule,
	],
})
export class RootStoreModule {}
