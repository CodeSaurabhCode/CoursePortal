import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { LoginComponent } from './users/login/login.component';
import { CourseDetailsGuard } from './courses/course-details/course.detail.gaurd';
import { CourseEnrolledComponent } from './courses/course-enrolled/course-enrolled.component';
import { MyCoursesComponent } from './courses/my-courses/my-courses.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { CourseUpdateComponent } from './courses/course-update/course-update.component';

const routes: Routes = [
  {path : "home", component : HomeComponent },
  {path : "courses", component : CoursesComponent },
  {path : "courses/:id", component : CourseDetailsComponent, canActivate:[CourseDetailsGuard] },
  {path : "my-courses", component : MyCoursesComponent },
  {path : "my-courses/:id", component : CourseEnrolledComponent, canActivate:[CourseDetailsGuard] },
  {path : "createcourse", component : CreateCourseComponent},
  {path : "updatecourse/:id", component : CourseUpdateComponent},
  {path : "login", component : LoginComponent },
  {path : "error", component : ErrorComponent},
  {path : "", redirectTo: 'home', pathMatch:'full'},
  {path : "**", redirectTo: 'error', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
