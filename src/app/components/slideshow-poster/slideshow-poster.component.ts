import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { ModalController } from '@ionic/angular';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Movie[] =[];
  @Output() getMorePopular = new EventEmitter();
  
  slideOpts = {
    slidesPerView: 3.3,
    grabCursor: true,
    spaceBetween: 15
    //freeMode: true,
    //slidesPerColumn: 2,
    //slidesPerColumnFill: 'row'
  }
  
  constructor(private modalCtrl: ModalController,  private router: Router) { }

  ngOnInit() {}

  // Navega a otra pagina con el id de la pelicula
  openDetails(id){
    this.router.navigate(['movie-detail', id]);
  }

  addSlides(){
    this.getMorePopular.emit();
  }
}
