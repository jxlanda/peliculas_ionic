import { Component } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { TheMovieDBService } from '../services/themoviedb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchString: string;
  searching: boolean = false;
  searchResults: Movie[] = [];

  ideas: string[] = [
    'Spiderman',
    'Batman',
    'Wonder Woman',
    'Bad Boys',
    'Buscando a Nemo'
  ];
  constructor(private movieService: TheMovieDBService, private router: Router) { }

  searchMovie(event) {
    const movieToSearch = event.detail.value;
    if (movieToSearch != "") {
      this.searching = true;
      this.movieService.searchMovies(movieToSearch).subscribe(resp => {
        this.searching = false;
        this.searchResults = resp.results;
      });
    } else {
      this.searchResults = [];
    }
  }

  
  openDetails(id){
    this.router.navigate(['movie-detail', id]);
    //this.router.navigate(['/movie-detail'], { queryParams: {id:id} });
  }

}
