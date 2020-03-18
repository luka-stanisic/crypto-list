import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsHeaderComponent } from './components/settings-header/settings-header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [SettingsHeaderComponent],
	imports: [CommonModule, AppRoutingModule],
	exports: [SettingsHeaderComponent],
})
export class AppSettingsModule {}
