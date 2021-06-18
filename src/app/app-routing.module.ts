import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HeaderComponent} from "../app/header/header.component"
import{StudentsComponent} from "../app/students/students.component"
import{TeachersComponent} from "../app/teachers/teachers.component"
import{ManagementComponent} from "../app/management/management.component"
import{LoginComponent} from "../app/registration/login/login.component"
import{SignUpComponent} from "../app/registration/sign-up/sign-up.component"


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'signin', component: LoginComponent},
  { path: 'signUp', component: SignUpComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
