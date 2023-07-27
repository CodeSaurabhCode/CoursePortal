import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SharedModule } from '../shared/shared.module';
import { CourseDetailsGuard } from './course-details/course.detail.gaurd';
import { CourseEnrolledComponent } from './course-enrolled/course-enrolled.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseUpdateComponent } from './course-update/course-update.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CourseItemComponent,
    CourseEnrolledComponent,
    MyCoursesComponent,
    CreateCourseComponent,
    CourseUpdateComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
