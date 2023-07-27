import { Injectable } from '@angular/core';
import { Instructor } from '../interfaces/instructors';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private baseUrl = "assets/data/instructors.json"
  instructors: Instructor[] = []
  constructor(private http: HttpClient) { }

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.baseUrl).pipe(
      map((instructors) => {
        this.instructors = instructors;
        return instructors;
      })
    );
  }

  getInstructorByName(name: string | undefined): Observable<Instructor | undefined> {
    return this.getInstructors().pipe(
      map((instructorList) => instructorList.find((instructor) => instructor.name === name))
    );
  }
} 
