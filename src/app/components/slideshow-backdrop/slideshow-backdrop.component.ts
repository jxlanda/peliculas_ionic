import { Component, OnInit, Input, Pipe, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { ModalController} from '@ionic/angular';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() movies: Movie[] =[];
  @Output() reloadFavorites = new EventEmitter();
  
  slideOpts = {
    slidesPerView: 1.1,
    grabCursor: true,
    spaceBetween: 15,
    //freeMode: true
  }
  
  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  openDetails(id){
    this.router.navigate(['movie-detail', id]).then(resp=>this.reloadFavorites.emit());
    //this.reloadFavorites.emit();    
    //this.router.navigate(['/movie-detail'], { queryParams: {id:id} });
  }

/*   async showDetails(id: string){
    const movieModal = await this.modalCtrl.create({
      component: MovieDetailComponent,
      componentProps: {
        id: id
      }
    });
    movieModal.present();
  }
 */
}
