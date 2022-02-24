import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PostEventComponent } from './component/post-event/post-event.component';
import { JoinusComponent } from './component/joinus/joinus.component';
import { BookingComponent } from './component/booking/booking.component';
import { FooterComponent } from './component/footer/footer.component';
import { BillboardComponent } from './component/billboard/billboard.component';
import { BookingWebComponent } from './component/booking-web/booking-web.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component: RegisterComponent},
  {path:'addevent',component:PostEventComponent},
  {path:'Joinus', component:JoinusComponent},
  {path:'booking',component:BookingComponent},
  {path:'footer',component:FooterComponent},
  {path:'billboard',component:BillboardComponent},
  {path:'booking-web',component:BookingWebComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
