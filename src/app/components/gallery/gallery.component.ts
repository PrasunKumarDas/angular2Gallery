import { Component,Input,OnChanges } from '@angular/core';
import { ImageService } from '../../services/image.service';

import { ImageFilterPipe } from '../../pipes/filter.pipe';

@Component({
    selector: 'app-gallery',
    templateUrl : './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    visualImages:any[] = [];
    @Input() filterBy?: string='all';


    constructor(private imageservice:ImageService){
        this.visualImages = this.imageservice.getImages();
        //console.log(this.visualImages);
    }
    ngOnChange(){
        this.visualImages = this.imageservice.getImages();
    }

}