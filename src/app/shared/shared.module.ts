import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cloudinary } from 'cloudinary-core';
import {CloudinaryModule} from '../vendor/cloudinary/cloudinary.module';
import CloudinaryConfiguration from '../vendor/cloudinary/cloudinary-configuration.class';
import {ImageComponent} from './image/image.component';

@NgModule({
  imports: [
    CommonModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dqismn81g' } as CloudinaryConfiguration)
  ],
  exports: [
    CommonModule,
    ImageComponent
  ],
  declarations: [ImageComponent]
})
export class SharedModule { }
