import { Component, OnInit} from '@angular/core';
import { MovieDetail } from '../../interfaces/movie-details';
import { Cast } from '../../interfaces/movie-credits';
import { TheMovieDBService } from '../../services/themoviedb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  id: string;
  private sub: any;
  heartValue: string;
  
  movie: MovieDetail;
  actors: Cast[] = [];

  cutText = 150;

  slidesCast = {
    slidesPerView: 3.3,
    grabCursor: true
    //freeMode: true
  }
  
  constructor(private movieService: TheMovieDBService,
              private route: ActivatedRoute,
              private dataStorage: DataStorageService) { }

  async ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(params['id']);
   });
   
    // Comprobar si la pelicula existe en el storage
    const existsOnFavorites = await this.dataStorage.findMovie(this.id);
    this.heartValue = (existsOnFavorites)? 'heart' : 'heart-outline';


    this.movieService.getMovieDetails(this.id).subscribe(resp => {
      this.movie = resp;
    });

    this.movieService.getMovieCredits(this.id).subscribe(resp => {
      this.actors = resp.cast;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  saveFavorite(){
    const exists = this.dataStorage.save(this.movie);
    this.heartValue = (exists)? 'heart-outline' : 'heart';
  }

}
