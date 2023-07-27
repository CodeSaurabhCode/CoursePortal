import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/interfaces/course';
import { CourseServiceService } from '../course-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      instructor: ['', Validators.required],
      description: ['', Validators.required],
      duration: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
      imageUrl: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      studentsEnrolled: [0, [Validators.required, Validators.min(0)]],
    });
  }
  

  createCourse(): void {
    if (this.courseForm?.invalid) {
      return;
    }

    const newCourse: Course = this.courseForm?.value;
    this.courseService.createCourse(newCourse);
    this.router.navigate(['/courses'])
  }








}
  
