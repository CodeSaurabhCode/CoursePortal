import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesModule } from './courses/courses.module';
import { CoursesComponent } from './courses/courses/courses.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { InstructorComponent } from './instructor/instructor.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

// const appRoutes : Routes = [
//   {path : "", component : HomeComponent },
//   {path : "practice", component : RoutePracticeComponent },
//   {path : "courses", component : CoursesComponent },
//   {path : "courses/:id", component : CoursesComponent }
// ]
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    InstructorComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoursesModule,
    UsersModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
