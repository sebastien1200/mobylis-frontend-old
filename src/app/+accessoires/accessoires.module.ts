import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoiresComponent} from './accessoires.component';
import {AccessoiresRoutingModule} from "./accessoires-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AccessoiresRoutingModule
  ],
  declarations: [AccessoiresComponent]
})
export class AccessoiresModule { }
