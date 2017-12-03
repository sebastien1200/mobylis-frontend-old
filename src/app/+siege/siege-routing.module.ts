import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SiegeComponent} from "./siege.component";


const routes: Routes = [
  { path: '', component: SiegeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiegeRoutingModule { }
