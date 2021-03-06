import { Component, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrls: ['./display-input.component.scss']
})
export class DisplayInputComponent implements OnInit {
  
  datas$
  diseaseForm: FormGroup;
  constructor(private data: DataServiceService,private router: Router,private route:ActivatedRoute) { 
    
    this.route.params.subscribe( params => this.datas$ = params.id );
    
  }

  ngOnInit() {
    this.data.getDetails(this.datas$).subscribe(
      data => this.datas$ = data 
    );
    
  }
  


}
