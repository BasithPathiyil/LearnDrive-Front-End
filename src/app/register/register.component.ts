import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email=""
  username=""
  registerForm = this.fb.group({
    email : ['',[Validators.required,Validators.email]],
    username : ['',[Validators.required]],
    password : ['',[Validators.required]]
  })
  constructor(private fb : FormBuilder,private ds : DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var email = this.registerForm.value.email
    var username = this.registerForm.value.username
    var password = this.registerForm.value.password
    if(this.registerForm.valid){
      this.ds.register(email,username,password).subscribe((result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('')
       },result=>{
        alert(result.error.message)
       })
    }else{
      alert("Invalid Form")
    }
     
    
  }

}
