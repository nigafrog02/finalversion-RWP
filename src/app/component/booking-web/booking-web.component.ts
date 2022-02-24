import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-booking-web',
  templateUrl: './booking-web.component.html',
  styleUrls: ['./booking-web.component.css']
})
export class BookingWebComponent implements OnInit {

  
  bookingList : Booking[] = [];
  bookingobj : Booking ={
    id: '',
    email: '',
    contact: '',
    event_name: '',
    ticket: 0
  }
  
  id:string = '';
    
    email: string= '';
    contact: string= '';
    event_name : string= '';
    ticket:number = 0;


  constructor(private auth : AuthService, private data : DataService) { }

  ngOnInit(): void {
  }
  resetform(){
    this.id = '';
    this.email= '';
    this.contact= '';
    this.event_name = '';
    this.ticket = 0;
  }
  addBooking(){

    if( this.contact == '' || this.email == '' || this.event_name == '' || this.ticket <= 0 ){
      alert('Fill all inputs field please & order at least 1 ticket');
      return;
    }
    

    this.bookingobj.id ='';
    this.bookingobj.email = this.email;
    this.bookingobj.event_name = this.event_name;
    this.bookingobj.contact = this.contact;
    this.bookingobj.ticket = this.ticket;
    alert('Ordered Ticket successfully');
    
    
    this.data.addBooking(this.bookingobj);
    this.resetform();
    }


  
  }
