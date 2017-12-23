import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { Cloudinary } from 'cloudinary-core';
import {CloudinaryModule} from '../vendor/cloudinary/cloudinary.module';
import CloudinaryConfiguration from '../vendor/cloudinary/cloudinary-configuration.class';

@NgModule({
  imports: [
    CommonModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dqismn81g' } as CloudinaryConfiguration)
  ],
  exports: [
    CommonModule
  ],
  declarations: [ImageComponent]
})
export class SharedModule { }
