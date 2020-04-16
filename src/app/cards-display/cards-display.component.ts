import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireObject,AngularFireList} from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AngularFireModule} from '@angular/fire';

@Component({
  selector: 'app-cards-display',
  templateUrl: './cards-display.component.html',
  styleUrls: ['./cards-display.component.scss']
})
export class CardsDisplayComponent implements OnInit {

  items: Observable<any[]>;
  covidItems:Observable<any[]>;
  currencyItems:Observable<any[]>;
  itemRef : AngularFireList<any[]>;
  constructor(firestore: AngularFirestore,private db:AngularFireDatabase) {
    // this.itemRef= db.list('/weather');
    // this.items= this.itemRef.valueChanges();
    // this.items.subscribe(res=>(console.log(this.items)));
    this.items= db.list('/weather').valueChanges();
    this.covidItems = db.list('/corona').valueChanges();
    this.currencyItems=db.list('/currency').valueChanges();
  }

  ngOnInit() {
    
  }

}
//"auth == null"