import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router, private user: UserService){}

  isLoggedIn(): boolean {
    return this.user.isLoggedIn();
  }


  getUserRole(){
    return this.user.getCurrentUserRole()
  }

  getMyCourses(){
    return this.getUserRole() === "user"
  }

  logout(): void {
    this.user.logout();
    this.router.navigate(['/login']); // Assuming you have a login route
  }


}
// email?: string | null;
// isLoggedIn = false;
// constructor(private router: Router, private user: UserService){}
//   ngOnInit(): void {
//     this.isLoggedIn = this.user.isLoggedIn()
//     if(this.isLoggedIn && this.user.getCurrentUserRole() === 'user'){
//       this.email = "user@gmail.com"
//     }

//     console.log(this.isLoggedIn)
//   }
// logout(){
//     if(this.email)
//     localStorage.removeItem('email')
//     this.router.navigate(['/courses'])
//   }
// }
