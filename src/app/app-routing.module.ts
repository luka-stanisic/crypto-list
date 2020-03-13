import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoListComponent } from './cryptocurrencies/components/crypto-list/crypto-list.component';
import { CryptoDetailsComponent } from './cryptocurrencies/components/crypto-details/crypto-details.component';

const routes: Routes = [
	{ path: '', component: CryptoListComponent },
	{ path: 'details/:id', component: CryptoDetailsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
