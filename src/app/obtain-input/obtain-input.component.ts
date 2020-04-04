import { Component, OnInit,ViewChildren } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-obtain-input',
  templateUrl: './obtain-input.component.html',
  styleUrls: ['./obtain-input.component.scss']
})
export class ObtainInputComponent implements OnInit {
  @ViewChildren('f') trackingForm:NgForm;
  datas$:Object;
  diseaseForm: FormGroup;
  countryName="";
  country=""
  //<a href="/display/Ind" >
  constructor(private data: DataServiceService) { 
    this.diseaseForm=new FormGroup({
      'country' : new FormControl(null)
   });
    
  }

  ngOnInit(){
    this.data.getDetail().subscribe(
      data => this.datas$ = data 
    );
  }
  
  
  onSubmit(name :string){
    this.diseaseForm.get('country').setValue(this.trackingForm.value.country);;
    //this.router.navigateByUrl("/details/"+name);
  }
}


