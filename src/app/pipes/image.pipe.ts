import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const urlImg = environment.urlImgTMDB;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  // Este pipe construye todo el path de la imagen 

  transform(img: string, size: string='w500'): string {
    if(!img){
      // Aqui se puede regresar una imagen por defecto
      return;
    }
    const fullUrlImg = `${urlImg}/${size}${img}`;
    return fullUrlImg;
  }

}
