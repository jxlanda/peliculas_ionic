import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseTheMovieDB } from '../interfaces/movie';
import { environment } from '../../environments/environment';
import { MovieDetail } from '../interfaces/movie-details';
import { MovieCredits } from '../interfaces/movie-credits';

// Definimos constantes de la API que estan en los enviroments
const url = environment.urlTMDB;
const apiKey = environment.apiKeyTMDB;

@Injectable({
  providedIn: 'root'
})
export class TheMovieDBService {

  // Paginacion de las peticiones, de 20 en 20
  private popularPage = 0;

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    query = url + query;
    query += `&api_key=${apiKey}&language=es-MX&include_image_language=es`;
    return this.http.get<T>(query);
  }

  // Regresa todas las peliculas inTheatres
  discoverInTheatres() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const lastDayMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    let monthString = String(month).padStart(2, '0');


    const since = `${today.getFullYear()}-${monthString}-01`;
    const until = `${today.getFullYear()}-${monthString}-${lastDayMonth}`;


    return this.executeQuery<ResponseTheMovieDB>(`/discover/movie?primary_release_date.gte=${since}&primary_release_date.lte=${until}`);
  }

  // Regresa todas las peliculas BestMoviesYear

  discoverBestMoviesYear(year: string) {
    return this.executeQuery<ResponseTheMovieDB>(`/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc`);
  }

  // Casi lo mismo que inTheatres, solo cambian algunas peliculas
  // El ano puede ser automatico pero 

  moviesNowPlaying() {
    // /movie/now_playing?&year=2020
    // /discover/movie?&region=MX&year=2020
    return this.executeQuery<ResponseTheMovieDB>(`/movie/now_playing?&year=2020`);
  }

  // Regresa todas las peliculas Popular
  moviesPopular() {
    this.popularPage++;
    return this.executeQuery<ResponseTheMovieDB>(`/movie/popular?&page=${this.popularPage}`);
  }

  // Regresa todas las peliculas UpComing
  // Se puede especificar por region

  moviesUpcoming() {
    // &region=MX
    return this.executeQuery<ResponseTheMovieDB>(`/movie/upcoming?`);
  }

  // Regresa todas las peliculas TopRated

  moviesTopRated() {
    return this.executeQuery<ResponseTheMovieDB>(`/movie/top_rated?`);
  }

  // Regresa la informacion de una pelicula de acuerdo al id

  getMovieDetails(movieId: String){
    return this.executeQuery<MovieDetail>(`/movie/${movieId}?`);
  }

  // Regresa los actores de una pelicula de acuerdo al id

  getMovieCredits(movieId: String){
    return this.executeQuery<MovieCredits>(`/movie/${movieId}/credits?`);
  }

  // Regresa una respuesta Search de acuerdo al nombre de la pelicula

  searchMovies(movie: string){
    return this.executeQuery<ResponseTheMovieDB>(`/search/movie?&query=${movie}`);
  }

}
