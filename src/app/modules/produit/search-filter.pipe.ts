import { Pipe, PipeTransform } from '@angular/core';
import { product } from 'models/product';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(ListProduit: product[], searchValue: string): product[]  {
    if(!ListProduit || !searchValue){
      return ListProduit;

    }
    return ListProduit.filter(product =>
     product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
 }

}
