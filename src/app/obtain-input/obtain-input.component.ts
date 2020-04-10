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
  inList=false;

  constructor(private data: DataServiceService,private router: Router) { 
    
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
    this.diseaseForm.get('country').setValue(name);
     //this.diseaseForm.value.country=name;
     for(let i=0;i<Object.keys(this.datas$).length;i++)
     {
      if(((this.datas$[i].country).toLowerCase()).match(name) ) 
      {
        //this.inList=false;
         this.router.navigate(['./display/'+name]);
      }
      else
      {
        this.inList=true;
        //return this.inList;
      }
    }  
  } 
}



