import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccessoiresComponent} from "./accessoires.component";

const routes: Routes = [
  { path: '', component: AccessoiresComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoiresRoutingModule { }
