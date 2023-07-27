import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from '../course-service.service';
import { Course } from 'src/app/interfaces/course';
import { InstructorService } from 'src/app/instructor/instructor.service';
import { Instructor } from 'src/app/interfaces/instructors';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;
  instructor: Instructor | undefined;
  constructor(private router: ActivatedRoute, private courseService : CourseServiceService,
  private instructorServices: InstructorService){}

  ngOnInit(): void {
    const courseId = parseInt(this.router.snapshot.params['id']);
    this.courseService.getCourseById(courseId).subscribe((course) => {
      this.course = course;
      this.getInstructor()
    });
  }

  getInstructor(){
    this.instructorServices.getInstructorByName(this.course?.instructor).subscribe((instructor)=>{
      this.instructor = instructor
    })
  }

  onEnrolled(){
    if(this.course)
    this.courseService.myCourses.push(this.course)
    console.log(this.courseService.myCourses)
  }
}
  
  

  



