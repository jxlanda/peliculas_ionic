import { Component, OnInit, Input } from '@angular/core';
import { TheMovieDBService } from '../../services/themoviedb.service';
import { MovieDetail } from '../../interfaces/movie-details';
import { Cast } from '../../interfaces/movie-credits';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() id;

  movie: MovieDetail;
  actors: Cast[] = [];

  cutText = 150;

  slidesCast = {
    slidesPerView: 3.3,
    grabCursor: true
    //freeMode: true
  }

  constructor(private movieService: TheMovieDBService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.movieService.getMovieDetails(this.id).subscribe(resp => {
      this.movie = resp;
    });

    this.movieService.getMovieCredits(this.id).subscribe(resp => {
      this.actors = resp.cast;
    });
  }

  return(){
    this.modalCtrl.dismiss();
  }
  
  favorite(){

  }

}
