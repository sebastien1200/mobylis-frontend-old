import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegacyComponent } from './legacy.component';
import {LegacyRoutingModule} from './legacy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LegacyRoutingModule
  ],
  declarations: [LegacyComponent]
})
export class LegacyModule { }
