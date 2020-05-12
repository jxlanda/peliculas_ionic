import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../services/themoviedb.service';
import { Movie, ResponseTheMovieDB } from '../interfaces/movie';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  inTheatres: Movie[] = [];
  popular: Movie[] = [];
  
  constructor(private movieService: TheMovieDBService) { }

  ngOnInit() {
    this.movieService.moviesNowPlaying().subscribe(resp => {
      this.inTheatres = resp.results;
    });
  }

  getPopular(){
    this.movieService.moviesPopular().subscribe(resp => {
      this.popular.push(...resp.results);
      //this.popular = resp.results;
    });
  }

  getMorePopular(){
    this.getPopular();
  }

}
