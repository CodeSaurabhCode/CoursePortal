import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { CourseServiceService } from '../course-service.service';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() course : any;

  max = 5;
  isReadonly = true;

  constructor(private courseService : CourseServiceService, private user: UserService){}

  deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId)
  }

  getUserRole(): string {
    return this.user.getCurrentUserRole();
  }

  canView(): boolean {
    return this.getUserRole() === 'user' || this.getUserRole() === 'admin';
  }

  canUpdate(): boolean {
    return this.getUserRole() === 'admin';
  }

  canDelete(): boolean {
    return this.getUserRole() === 'admin';
  }
}
