import { ComponentFixture, TestBed } from '@angular/core/testing';
//Fixture has access to class debug which has access to dom
import { LoginComponent } from './login.component';
import { HomeComponent } from 'src/app/home/home.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "My home"', ()=>{

    const fixture = TestBed.createComponent(HomeComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual("My Home")
  }
  )
});
