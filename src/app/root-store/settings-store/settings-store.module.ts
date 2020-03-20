import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { settingsReducer, settingsFeatureKey } from './reducer';

@NgModule({
	declarations: [],
	imports: [CommonModule, StoreModule.forFeature(settingsFeatureKey, settingsReducer)],
})
export class SettingsStoreModule {}
