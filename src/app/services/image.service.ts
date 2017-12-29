import {Injectable} from "@angular/core";

@Injectable()
export class ImageService{
	visualImages = [];
	getImages(){
		return this.visualImages = IMAGES.slice(0);

	}
	
}
const IMAGES = [
	{
		'id' : '1',
		'category' : "Cricket",
		'description' : "Image 1",
		'imageurl' : 'assets/images/image1.jpg'

	},
	{
		'id' : '2',
		'category' : "Cricket",
		'description' : "Image 2",
		'imageurl' : 'assets/images/image2.jpg'

	},
	{
		'id' : '3',
		'category' : "Football",
		'description' : "Image 3",
		'imageurl' : 'assets/images/image3.jpg'

	},
	{
		'id' : '4',
		'category' : "Football",
		'description' : "Image 4",
		'imageurl' : 'assets/images/image4.jpg'

	},
	{
		'id' : '5',
		'category' : "Football",
		'description' : "Image 5",
		'imageurl' : 'assets/images/image5.jpg'

	},
	{
		'id' : '6',
		'category' : "Volly",
		'description' : "Image 6",
		'imageurl' : 'assets/images/image6.jpg'

	},
	{
		'id' : '7',
		'category' : "Volly",
		'description' : "Image 7",
		'imageurl' : 'assets/images/image7.jpg'

	}
];