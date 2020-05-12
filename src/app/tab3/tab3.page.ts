import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../interfaces/movie-details';
import { DataStorageService } from '../services/data-storage.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  favorites: MovieDetail[] = [];

  // Opciones del Slider
  slideOpts = {
    slidesPerView: 1.1,
    grabCursor: true
    //freeMode: true
  }

  constructor(private storageService: DataStorageService) { }

  ngOnInit(){
    this.reloadFavorites();
  }

  // Recarga el Storage
  ionViewWillDisapper(){
    this.reloadFavorites();
  }

  // Recarga el Storage
  ionViewWillEnter() {
    this.reloadFavorites();
  }

  async reloadFavorites(){
    this.favorites = await this.storageService.get();
  }
}
