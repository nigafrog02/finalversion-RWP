import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/model/artist';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  artistsList : Artist[] = [];
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
  constructor(private auth : AuthService, private data : DataService ) { }

  ngOnInit(): void {
    this.getAllArtists();
  }


  getAllArtists(){

    this.data.getAllArtists().subscribe(res => {

      this.artistsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.idl
        return data;

      })

    },err =>{

      alert('Error while fetching Artist data')

    })
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

    if(this.first_name == '' || this.last_name == '' || this.contact == '' || this.email == '' || this.start_date ==new Date() || this.end_date == new Date() || this.event_name == '' || this.price == 0){
      alert('Fill all inputs field please');
    }

    this.artistobj.id ='';
    this.artistobj.email = this.email;
    this.artistobj.first_name = this.first_name;
    this.artistobj.last_name = this.last_name;
    
    this.data.addArtist(this.artistobj);
    this.resetform();


  }

  updateArtist(){

  }

  deleteArtist(artist : Artist){

    if(window.confirm('Are you sure u want to delete' + artist.first_name+''+artist.last_name+'?')){
      this.data.deleteArtist(artist);
    }
    


  }
      

}

