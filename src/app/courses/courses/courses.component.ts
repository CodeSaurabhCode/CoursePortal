import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/interfaces/categories';
import { Course } from 'src/app/interfaces/course';
import { CourseServiceService } from '../course-service.service';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  courses:Course[] = [];
  searchCourses : Course[] = [];
  private _searchText = '';
  get searchText(){
    return this._searchText
  }
  
  set searchText(value: string){
    this._searchText = value
    this.searchCourses = this.searching(value)
  }

  constructor(private courseService: CourseServiceService, private user: UserService){

  }
  ngOnInit(): void {
      this.courses = this.courseService.courses
      this.searchCourses  = this.courses
      console.log(this.courseService.courses)
  }
  
  searching(value:string){
    value = value.toLocaleLowerCase()
    return this.courses.filter((course:Course) => 
    course.title.toLocaleLowerCase().includes(value))
  }

  getAll(){
    return this.courses.filter((course:Course) => 
    course.title.toLocaleLowerCase().includes(""))
  }

  CategoryIdSelected = 0;
  sortSelected = "name";
  sortOptions = [
    {name : "Default", value: "default"},
    {name : "Alphabetically", value: "name"},
    {name : "Rating", value: "rating"}
  ]

  onSortSelected(event:any){
    const sortOption = event.target.value
    switch (sortOption) {
      case "name":
        this.sortCoursesAlphabetically()
        break;
      case "rating":
        this.sortCoursesByRating()
        break;
      default:
        break;
    }
  }

  sortCoursesAlphabetically() {
    this.searchCourses.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      return titleA.localeCompare(titleB);
    });
  }

  sortCoursesByRating() {
    this.searchCourses.sort((a, b) => b.rating - a.rating);
  }

  onCategorySelected(id:number){
    const category = this.Categories[id - 1].name;
    this.CategoryIdSelected = id
    this.searchCourses = this.courses.filter((course) =>
    course.category.includes(category))
  }

  getUserRole(): string {
    return this.user.getCurrentUserRole();
  }

  canDelete(): boolean {
    return this.getUserRole() === 'admin';
  }

  Categories : Categories[] = [{
    "id" : 1,
    "name": "Software Development"
  },{
    "id": 2,
    "name" : "AI & ML"
  },{
    "id": 3,
    "name" : "Product Management"
  },{
    "id" : 4,
    "name": "Human Resource"
  }
  ];
}
