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

  datas$
  rate$

  constructor(private data: DataServiceService,private router: Router,private route:ActivatedRoute) {
    this.data.getCurrencyDetail().subscribe(
      data => this.datas$ = data 
    );
    this.data.getCurrencyDisplay().subscribe(
      data => this.rate$ = data 
    );
   }
   
  ngOnInit(): void {
    
  }
  

}