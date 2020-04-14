import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection}  from '@angular/fire/firestore';
import {Item} from '../model/item';
//import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items:Observable<Item[]>;
  constructor(public afs: AngularFirestore) {
    this.items= this.afs.collection('items').valueChanges();
   }
}

