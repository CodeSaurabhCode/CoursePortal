import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseServiceService } from '../course-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent {
  courseForm: FormGroup;
  courseId: number;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourseById(this.courseId).subscribe((course) => {
      if (course) {
        this.courseForm.patchValue(course);
      }
    });
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

  onUpdate(): void {
    if (this.courseForm.invalid) {
      return;
    }

    const updatedCourse: Course = this.courseForm.value;
    updatedCourse.id = this.courseId;

    this.courseService.updateCourse(updatedCourse)
    this.router.navigate(['/courses']);
  }
}
