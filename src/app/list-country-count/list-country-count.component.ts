import { Component, OnInit,ViewChildren } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-list-country-count',
  templateUrl: './list-country-count.component.html',
  styleUrls: ['./list-country-count.component.scss']
})
export class ListCountryCountComponent implements OnInit {
  

  datas$
  constructor(private data: DataServiceService,private router: Router,private route:ActivatedRoute) {
    
   }
  ngOnInit(): void {
    this.data.getDetail().subscribe(
      data => this.datas$ = data 
    );
  }
  
  

}
