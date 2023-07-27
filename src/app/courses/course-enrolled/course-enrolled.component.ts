import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailedCourse, Modules } from 'src/app/interfaces/DetailedCourse';
import { EnrolledService } from './enrolled.service';

@Component({
  selector: 'app-course-enrolled',
  templateUrl: './course-enrolled.component.html',
  styleUrls: ['./course-enrolled.component.css']
})
export class CourseEnrolledComponent implements OnInit {
  courseId? : number;
  weekNumber: number = 0;
  moduleName?: string
  moduleData: any
  weekData:any
  detailedCourse?: DetailedCourse;
  constructor(private router: ActivatedRoute, private enrolled:EnrolledService){}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.courseId = Number(params.get('id'));
      if (this.courseId) {
        this.enrolled.getDetailedCourseById(this.courseId).subscribe({
          next: (response) => (this.detailedCourse = response),
        });
      }
    });

    
  }

  selectedWeekData(weekNumber:number){
    this.weekNumber = weekNumber;
    this.weekData = this.detailedCourse?.modules.find(
        (week) => week.weekNumber === this.weekNumber,
      );
    console.log(this.weekData)
     
  }

  getModuleVideo(moduleName: string){
   for (let index = 0; index < this.weekData.modules.length - 1; index++) {
    if(this.weekData.modules[index].title === moduleName){
      this.moduleName = moduleName
      this.moduleData = this.weekData.modules[index].description
    }
    
   }
  }


}
