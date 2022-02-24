import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat'
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PostEventComponent } from './component/post-event/post-event.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AuthService } from './shared/auth.service';
import { HeaderComponent } from './component/header/header.component';
import { JoinusComponent } from './component/joinus/joinus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BookingComponent } from './component/booking/booking.component';
import { FooterComponent } from './component/footer/footer.component';
import { BillboardComponent } from './component/billboard/billboard.component';
import { BookingWebComponent } from './component/booking-web/booking-web.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PostEventComponent,
    HeaderComponent,
    JoinusComponent,
    BookingComponent,
    FooterComponent,
    BillboardComponent,
    BookingWebComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(()=>getStorage()),
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    SlickCarouselModule
    
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
