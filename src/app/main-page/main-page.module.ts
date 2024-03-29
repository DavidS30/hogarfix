import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { MainPageComponent } from './main-page.component';
import {MatCardModule} from '@angular/material/card';
import { StarRatingModule } from 'angular-star-rating';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [MainPageComponent, UserCardComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    StarRatingModule.forRoot()
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
