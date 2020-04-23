import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators, NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase,AngularFireObject,AngularFireList} from '@angular/fire/database'
@Component({
  selector: 'app-obtain-currency',
  templateUrl: './obtain-currency.component.html',
  styleUrls: ['./obtain-currency.component.scss']
})
export class ObtainCurrencyComponent implements OnInit {

  datas$
  currencyForm: FormGroup;
  currency="";
  itemR: Observable<any[]>;
  itemRef : AngularFireList<any[]>;
  currencyFrom=""
  constructor(private data: DataServiceService,private router: Router,firestore: AngularFirestore,private db:AngularFireDatabase) { 
    
   
   this.data.getCurrencyDetail().subscribe(
    data => this.datas$ = data 
  );
  this.data.getRateDetail(this.currencyFrom).subscribe(
    data => this.datas$ = data 
  );
  this.itemR= db.list('/').valueChanges();
  }
  ngOnInit(){
   
    }
  
  onSubmit(){

  }
  
  
  
}

