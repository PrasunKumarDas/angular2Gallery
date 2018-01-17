import {Injectable} from "@angular/core";

@Injectable()
export class ImageService{
	visualImages = [];
	getImages(){
		return this.visualImages = IMAGES.slice(0);

	}
	getImage(id){
		let image = IMAGES.slice(0).find(function(image){
			if(image.id == id){
				return image;
			}
		});
		return image;
	}
	
}
const IMAGES = [
	{
		'id' : '1',
		'category' : "cricket",
		'description' : "Image 1",
		'imageurl' : 'assets/images/image1.jpg'

	},
	{
		'id' : '2',
		'category' : "cricket",
		'description' : "Image 2",
		'imageurl' : 'assets/images/image2.jpg'

	},
	{
		'id' : '3',
		'category' : "football",
		'description' : "Image 3",
		'imageurl' : 'assets/images/image3.jpg'

	},
	{
		'id' : '4',
		'category' : "football",
		'description' : "Image 4",
		'imageurl' : 'assets/images/image4.jpg'

	},
	{
		'id' : '5',
		'category' : "football",
		'description' : "Image 5",
		'imageurl' : 'assets/images/image5.jpg'

	},
	{
		'id' : '6',
		'category' : "volly",
		'description' : "Image 6",
		'imageurl' : 'assets/images/image6.jpg'

	},
	{
		'id' : '7',
		'category' : "volly",
		'description' : "Image 7",
		'imageurl' : 'assets/images/image7.jpg'

	}
];