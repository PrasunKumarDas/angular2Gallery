import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
	name : 'imageFilter'
})

export class ImageFilterPipe implements PipeTransform{
	transform(items : any[] , citeria : string):any{
		if(citeria == 'all'){
			return items;
		}else{
		console.log('Items',items);
			return items.filter(item=>{
				return item.category === citeria;
			})
		}

	}
	
}



