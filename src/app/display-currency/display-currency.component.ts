import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-display-currency',
  templateUrl: './display-currency.component.html',
  styleUrls: ['./display-currency.component.scss']
})
export class DisplayCurrencyComponent implements OnInit {

  datas$:any;
  rate$:any;
  currencySymbol=['INR','CAD','HKD','ISK','PHP','DKK','HUF','CZK','GBP','RON','SEK','IDR','INR','BRL','RUB','HRK','JPY','THB','CHF','EUR','MYR','BGN','TRY','CNY','NOK','NZD','ZAR','MXN','SGD','AUD','ILS','KRW','PLN'];
  constructor(private data: DataServiceService,private router: Router,private route:ActivatedRoute) {
    this.route.params.subscribe( params => this.datas$ = params.id );
   }
   
  ngOnInit() :void {
    this.data.getCurrencyDetail().subscribe(
      data => this.datas$ = data 
    );
    this.data.getCurrencyRate().subscribe(
      data => this.rate$ = data 
    );
  }
  

}
