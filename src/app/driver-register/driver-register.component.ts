import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css']
})
export class DriverRegisterComponent implements OnInit {
  driverForm = this.fb.group({
    name : [''],
    age:[''],
    gender:[''],
    vehicles : [''],
    location:[''],
    mobilenumber : [''],
    emailid:['']
  })
  constructor(private router:Router,private fb:FormBuilder,private ds:DataService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert("Please Login!!")
      this.router.navigateByUrl('')
    }
  }
  registerDriver(){
    var name = this.driverForm.value.name
    var age=this.driverForm.value.age
    var gender=this.driverForm.value.gender
    var vehicles=this.driverForm.value.vehicles
    var location=this.driverForm.value.location
    var mobilenumber=this.driverForm.value.mobilenumber
    var emailid=this.driverForm.value.emailid
    this.ds.registerdriver(name,age,gender,vehicles,location,mobilenumber,emailid).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('dashboard')

    },result=>{
      alert(result.error.message)
    })
    

  }
  logout(){
    this.ds.logout()
  }

}
