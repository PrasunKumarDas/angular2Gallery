import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ImageService } from '../../services/image.service';

@Component({
	selector : 'image-detail', 
	templateUrl : './image.detail.component.html',
	styleUrls : ['./image.detail.component.css']
})
export class ImageDetailComponent{
	
	constructor(private activatedRoute: ActivatedRoute, private imageservice: ImageService){}
	public image:any;
	ngOnInit(){
		this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			this.image  = this.imageservice.getImage(id);
			console.log(this.image );
		});
	}
} 