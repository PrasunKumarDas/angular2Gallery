import { Routes } from  '@angular/router';
import { GalleryComponent } from './app/components/gallery/gallery.component';
import { ImageDetailComponent } from './app/components/image/image.detail.component';


export const appRoutes:Routes = [
    {path : 'gallery' , component: GalleryComponent},
    {path : 'image/:id' , component: ImageDetailComponent} ,
    {path : '', redirectTo : '/gallery' ,pathMatch : 'full'},
]
