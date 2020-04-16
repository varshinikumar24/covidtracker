import { Component, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators, NgForm } from '@angular/forms';
import {SortPipe} from '../sort-pipe'
import {AngularFireDatabase,AngularFireObject,AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'app-obtain-region',
  templateUrl: './obtain-region.component.html',
  styleUrls: ['./obtain-region.component.scss']
})
export class ObtainRegionComponent implements OnInit {

  datas$
  constructor(private data: DataServiceService,private router: Router) { 
    
   
   this.data.getWeatherReport().subscribe(
    data => this.datas$ = data 
  );
  
  }
  ngOnInit(){
   
    }
}
