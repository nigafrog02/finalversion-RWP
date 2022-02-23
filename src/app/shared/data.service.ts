import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/compat/firestore'
import { Artist } from '../model/artist';
import { Booking } from '../model/booking';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }


  //add Artistname
  addArtist(artist : Artist){
    artist.id = this.afs.createId();
    return this.afs.collection('/Artists').add(artist);
  }

  //add booking to database
  addBooking(booking:Booking){
    booking.id = this.afs.createId();
    return this.afs.collection('/Bookings').add(booking);
  }

  

  //get all Artistname
  getAllArtists(){
    return this.afs.collection('/Artists').snapshotChanges();

  }

  //delete Artist ( no need )
  deleteArtist(artist : Artist){
    return this.afs.doc('/Artists/'+artist.id).delete();
  }

  //update Artist ( no need )
  updateArtist(artist:Artist){
    this.deleteArtist(artist);
    this.addArtist(artist);
  }
}
