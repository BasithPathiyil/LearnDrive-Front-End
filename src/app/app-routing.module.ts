import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { DriverdetailsComponent } from './driverdetails/driverdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'register',component:RegisterComponent},
  {path : '',component:LoginComponent},
  {path : 'driverregister',component:DriverRegisterComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'driverdetails',component:DriverdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
