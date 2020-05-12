import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/movie-details';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  // Se crea un array para almacenar las peliculas en el Storage del dispositivo
  moviesStorage: MovieDetail[] = [];

  constructor(private nativeStorage: Storage, public toastCtrl: ToastController) {
    this.get();
  }

  // Es una funcion que presenta un Toast, recibe el mensaje
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  // Funciona para guardar una pelicula en favoritos
  save(movie: MovieDetail) {
    
    const exist = this.moviesStorage.find(m => m.id === movie.id);

    if (!exist) {
      this.moviesStorage.push(movie);
      this.presentToast("Agregado a favoritos");
      this.nativeStorage.set('movies', this.moviesStorage);
      return false;
    } else {
      this.moviesStorage = this.moviesStorage.filter(m => m.id !== movie.id);
      this.presentToast("Eliminado de favoritos");
      this.nativeStorage.set('movies', this.moviesStorage);
      return true;
    }
  }

  // Devuelve todo el Storage, osea todo el array de peliculas en favoritos
  async get() {
    
    const favorites = await this.nativeStorage.get('movies');
    this.moviesStorage = favorites || [];
    return this.moviesStorage;
  }

  // Devuelve si una pelicula existe o no en el Storage, osea si esta en favoritos o no
  async findMovie(id) {
    id = Number(id);
    await this.get();
    const exists = this.moviesStorage.find(m => m.id === id);
    return (exists)? true : false;
  }

}
