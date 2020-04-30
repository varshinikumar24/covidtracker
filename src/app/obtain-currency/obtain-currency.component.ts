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

  
  rates$
  currencyForm: FormGroup;
  currency=""
  currencyAmt=""
  CurrencySymbol=""
  CurrencyAmount=""
  ResultedValue:number;
  show=false;
  result="";
  symbol="";
  buttonActive=true;
  currencySymbol=['USA','INR','CAD','HKD','ISK','PHP','DKK','HUF','CZK','GBP','RON','SEK','IDR','INR','BRL','RUB','HRK','JPY','THB','CHF','EUR','MYR','BGN','TRY','CNY','NOK','NZD','ZAR','MXN','SGD','AUD','ILS','KRW','PLN'];
  constructor(private data: DataServiceService,private router: Router,private route:ActivatedRoute) { 
    this.currencyForm=new FormGroup({
      'CurrencySymbol' : new FormControl(null),
      'CurrencyAmount' : new FormControl(null)

   });
   
  this.data.getCurrencyRate().subscribe(
    data => this.rates$ = data 
  );
  }
  ngOnInit(){
   
    }
    onActive(){
      if(this.currencyForm.value.CurrencySymbol.length <3 || this.currencyForm.value.CurrencyAmount < 0 || this.currencyForm.value.CurrencyAmount === null)
      {
        return true;
      }
      
    }
  onSubmit(currency_Symbol: String,currency_Amount: String){
    // this.currencyForm.value.Cto=to;
    // this.currencyForm.value.Camt=amt;
    this.currencyForm.get('CurrencySymbol').setValue(currency_Symbol);
    this.currencyForm.get('CurrencyAmount').setValue(currency_Amount);
    this.symbol=(this.currencyForm.value.CurrencySymbol).toUpperCase();
    this.ResultedValue=(this.rates$["rates"][this.symbol])*(this.currencyForm.value.CurrencyAmount);
    this.result=(this.ResultedValue).toFixed(3);
    this.show=true;
    
    

  }
  
}

