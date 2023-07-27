import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from '../courses/course-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private courseService: CourseServiceService){

  }
  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      console.log("courses list updated")
      console.log(this.courseService.courses)
    });
  }
  onLoadCourses(){
    this.router.navigate(['/courses'])
  }

  
}
