import { Component, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators, NgForm } from '@angular/forms';
import {SortPipe} from '../sort-pipe'

@Component({
  selector: 'app-obtain-input',
  templateUrl: './obtain-input.component.html',
  styleUrls: ['./obtain-input.component.scss'],
  
})
export class ObtainInputComponent implements OnInit {
  datas$
  diseaseForm: FormGroup;
  countryName="";
  country=""

  constructor(private data: DataServiceService) { 
    
    this.diseaseForm=new FormGroup({
      'country' : new FormControl(null)
   });
   this.data.getDetail().subscribe(
    data => this.datas$ = data 
  );
  }
  ngOnInit(){
    
  }
  nameLettersCount(){
    
    if((this.diseaseForm.value.country.length)<3){
      return true;
    }
  }
  
  onSubmit(name : string){
    //this.diseaseForm.value.country=name;
    this.diseaseForm.get('country').setValue(name);;
    
    
  }
}



