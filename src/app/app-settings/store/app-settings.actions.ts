import { createAction, props } from '@ngrx/store';
import { AppSettings } from '../models/app-settings';

export const updateAppSettings = createAction(
	'[App Settings Header] Update App Settings',
	props<{ appSettings: AppSettings }>()
);
