import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavBarComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavBarComponent,
    StarRatingComponent
  ]
})
export class SharedModule { }
