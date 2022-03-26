import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './form/form.component';
import { FormtwoComponent } from './formtwo/formtwo.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';

const routes: Routes = [

  {
    path:"",
    component:PhoneLoginComponent,
  },
  {
    path:"phone-login",
    component:PhoneLoginComponent
  },
  {
    path:"form",canActivate:[AuthGuard],
    component:FormComponent,
  },
  
  {
    path:"formtwo",canActivate:[AuthGuard],
    component:FormtwoComponent,
  },

  // {
  //   path:'form',
  //   component:FormComponent,
  // },
 
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
