import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder, private ds : DataService,private router:Router) { }
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

  ngOnInit(): void {
  }
  login(){
    var email=this.loginForm.value.email
    var password=this.loginForm.value.password
    if(this.loginForm.valid){
      this.ds.login(email,password).subscribe((result:any)=>{
        localStorage.setItem('token',result.token)
        this.router.navigateByUrl('dashboard')
      },result=>{
        alert(result.error.message)
      })
    }else{
      alert("Invalid Form")
    }
    
    
    
  }
}
