import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DetailedCourse } from 'src/app/interfaces/DetailedCourse';

@Injectable({
  providedIn: 'root'
})
export class EnrolledService {
  baseUrl = "\\assets\\data\\courseModule.json"

  constructor(private http:HttpClient) { }

  detailedCourses: DetailedCourse[] = [];

  getDetailedCourseData(): Observable<DetailedCourse[]>{
    return this.http.get<DetailedCourse[]>(this.baseUrl).pipe(
      map((detailedCourses) => {
        this.detailedCourses = detailedCourses
      return detailedCourses
    })
    );
  }

  getDetailedCourseById(id: number): Observable<DetailedCourse | undefined>{
    return this.getDetailedCourseData().pipe(
      map((detailedCourses) => detailedCourses.find((course) => course.id === id))
    )
  }
}
