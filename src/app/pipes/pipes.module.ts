import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { FilterByImagePipe } from './filter-by-image.pipe';



@NgModule({
  declarations: [ImagePipe, FilterByImagePipe],
  exports: [ImagePipe, FilterByImagePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
