import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Pipe({
  name: 'filterByImage'
})
export class FilterByImagePipe implements PipeTransform {

  // Este pipe simplemente recibe un arreglo Movie y filtra todos los objetos segun si tienen fondo o no
  // Osea solo mostrara los que si tienen, no queremos espacios vacios o imagenes por defecto
  transform(movies: Movie[],): any[] {
    return movies.filter(m=>{
      return m.backdrop_path;
    });
  }

}
