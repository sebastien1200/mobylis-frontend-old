import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiegeComponent } from './siege.component';
import {SiegeRoutingModule} from "./siege-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SiegeRoutingModule
  ],
  declarations: [SiegeComponent]
})
export class SiegeModule{ }
