import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cloudinary } from 'cloudinary-core';
import {ImageComponent} from './image/image.component';
import {CloudinaryModule} from './image/cloudinary/cloudinary.module';
import CloudinaryConfiguration from './image/cloudinary/cloudinary-configuration.class';

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
