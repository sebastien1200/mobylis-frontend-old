import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { Cloudinary } from 'cloudinary-core';
import {CloudinaryModule} from './vendor/cloudinary/cloudinary.module';
import CloudinaryConfiguration from './vendor/cloudinary/cloudinary-configuration.class';

const APP_ID = 'angular-universal-firebase';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: APP_ID }),
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dqismn81g' } as CloudinaryConfiguration),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
