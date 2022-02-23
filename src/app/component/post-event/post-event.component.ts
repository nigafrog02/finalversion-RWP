import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/model/artist';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-post-event',
  templateUrl: './post-event.component.html',
  styleUrls: ['./post-event.component.css']
})
export class PostEventComponent implements OnInit {
  

  artistobj : Artist ={
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    event_name: '',
    start_date: new Date(),
    end_date: new Date(),
    price: 0
  };

  id:string = '';
    first_name : string = '';
    last_name : string= '';
    email: string= '';
    contact: string= '';
    event_name : string= '';
    start_date: Date= new Date();
    end_date: Date= new Date();
    price:number = 0;

  constructor(private auth : AuthService, private data : DataService) { }

  ngOnInit(): void {
  }

  resetform(){
    this.id = '';
    this.first_name  = '';
    this.last_name = '';
    this.email= '';
    this.contact= '';
    this.event_name = '';
    this.start_date= new Date();
    this.end_date= new Date();
    this.price = 0;
  }

  addArtist(){

    if(this.first_name == '' || this.last_name == '' || this.contact == '' || this.email == '' || this.start_date >=this.end_date || this.end_date <= this.start_date || this.event_name == '' || this.price == 0 ){
      alert('Fill all inputs field please');
      return ;
    }

    this.artistobj.id ='';
    this.artistobj.email = this.email;
    this.artistobj.first_name = this.first_name;
    this.artistobj.last_name = this.last_name;
    this.artistobj.contact = this.contact;
    this.artistobj.event_name = this.event_name;
    this.artistobj.start_date = this.start_date;
    this.artistobj.end_date = this.end_date;
    this.artistobj.price = this.price;
    alert('Event added successfully');
    
    this.data.addArtist(this.artistobj);
    this.resetform();

  }

  

}
