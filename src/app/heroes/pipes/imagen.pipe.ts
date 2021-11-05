import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
 // pure:false cada vez que angular haga un cambio se va a disparar el pipe (consume mas memoria pero en algunos casos se puede necesitar)
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if(!heroe.id && !heroe.alt_image)//si no existe el id
    {
      return ` assets/no-image.png  `;
    }else if(heroe.alt_image){
     return heroe.alt_image;
    }else
    {
      return ` assets/heroes/${heroe.id}.jpg  `;
    }
   
  
  }

}
