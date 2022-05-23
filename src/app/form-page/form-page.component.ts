import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgForm} from "@angular/forms";
import { Router } from "@angular/router";
import { MyserviceService } from '../myservice.service';
import { NgToastService } from 'ng-angular-popup';

export interface IOption {
  id?: number;
  name: string;
}

export interface FormInterface{

  'first-name': string,
  'last-name': string,
  'email':string,
  'phone-number': number,
  'select-country': string,
  'select-occupation': string,
  'successful': boolean | string
}

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  searchable: boolean = false;
  disabled: boolean = false;
  eRadio: boolean = false;


  selectedCountry: string = '';
  selectedOccupation: string = '';

  countries: IOption[] = [];

  occupations: string[] = [
    'Frontend Developer', 
    'Backend Developer', 
    'Designer', 
    'Devops Engineer'
  ]

  constructor(private router: Router, private myservice: MyserviceService, private toast: NgToastService) {
    
  }

  ngOnInit(): void {
    this.myservice.getCountries().subscribe(
      (countries: IOption[]) => {
        this.countries = countries;
      }
    )
  }
  

  onSubmit(data: FormInterface, form:NgForm){
  if(data.successful==true|| data.successful=="true"){
    this.toast.success({
      detail: "Submitted", 
      summary: "Successfully submitted", 
      duration: 1000})
      this.router.navigate(['successful']);
      console.log(data.successful)
  }  
  else if(data.successful=="false" && form.untouched!=true){
    this.toast.error({
      detail: "Not Successful!", 
      summary: "Try Again Later!", 
      duration: 5000})
  }
  form.resetForm();
  if(data){
    form.enabled;
  }
  }

}
