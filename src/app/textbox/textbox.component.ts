import { Component, Input, Output, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';

import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  today = moment().locale('th').format('YYYY-MM-DD')
  // thaidate = this.today.clone().locale('th')

  pattern_lg = "[a-zA-Zก-๏\s]{1,25}"
  // userprofileForm = new FormGroup({
  // })
  firstName = new FormControl(null, [Validators.required])
  lastName = new FormControl(null, [Validators.required])
  id = new FormControl(null, [Validators.required])
  gender = new FormControl("", [Validators.required])
  date = new FormControl(this.today, [Validators.required])

  constructor(private router:Router){
  
  }


  ngOnInit(): void { 
  }
  reset() {
    this.firstName.reset();
    this.lastName.reset();
    this.id.reset();
    this.gender.reset("");
    this.date.reset(this.today);
  }
  showOutput() {
    const firstName = this.firstName.value
    const lastName = this.lastName.value
    const id = this.id.value
    const date = this.date.value
    const gender = this.gender.value
  }
  sendOutput(){
  this.router.navigate(['/result',{firstName:this.firstName.value
    ,lastName:this.lastName.value,
    id:this.id.value,date:this.date.value,
    gender:this.gender.value}])
  
  }
 

  // console.log(this.userprofileForm.value)
  // idCardValidator:ValidatorFn = (control:FormControl)=>{
  //   const idCard: string | null = control.value;
  //   if(idCard){
  //   return {idCard :true}
  //   }
  // return null 

  // }


}
