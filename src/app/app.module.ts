import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDetailComponent } from './components/image/image.detail.component';

import { ImageFilterPipe } from './pipes/filter.pipe';

import { ImageService } from './services/image.service';

import { appRoutes } from '../routes';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
