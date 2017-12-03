import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home';
import {PrestationComponent} from './+prestation';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prestation', component: PrestationComponent },
  { path: 'accessoires', loadChildren: './+accessoires/accessoires.module#AccessoiresModule'},
  { path: 'siege', loadChildren: './+siege/siege.module#SiegeModule'},
  { path: 'table', loadChildren: './+table/table.module#TableModule'},
  { path: 'contact', loadChildren: './+contact/contact.module#ContactModule'},
  { path: 'mentionslegales', loadChildren: './+legacy/legacy.module#LegacyModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
