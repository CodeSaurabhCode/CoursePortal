import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  myCourses: Course[] = []
  private baseUrl = "assets/data/CourseData.json"
  courses: Course[] = [];

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl).pipe(
      map((courses) => {
        this.courses = courses;
        return courses;
      })
    );

  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((courses) => courses.find((course) => course.id === id))
    );
  }

  createCourse(course: Course): void {
    const newId = this.courses.length > 0 ? this.courses[this.courses.length - 1].id + 1 : 1;
    const newCourse = { ...course, id: newId };
    this.courses.push(newCourse);
  }

  updateCourse(updatedCourse: Course): void {
    const index = this.courses.findIndex((course) => course.id === updatedCourse.id);
    if (index !== -1) {
      this.courses[index] = updatedCourse;
    }
  }

  deleteCourse(id: number): void {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = ''
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured : ${err.error.message}`
    }
    else{
      errorMessage = `Server Code : ${err.status}, `
    }
  }

}

