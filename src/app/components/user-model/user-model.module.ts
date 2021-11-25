import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserGuaredGuard } from '../User/user-guared.guard';


const routes:Routes=[
  {path:'',redirectTo:'/User/MyProfile',pathMatch:'full'},
  {path:'MyProfile',component:UserprofileComponent,canActivate:[UserGuaredGuard]},
  {path:'EditProfile',component:EditUserProfileComponent,canActivate:[UserGuaredGuard]}
]

@NgModule({
  declarations: [
    UserprofileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModelModule { }
