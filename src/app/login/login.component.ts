import { Component, OnInit } from '@angular/core';
import { FormBuilder,  } from '@angular/forms';
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
    email:[''],
    password:['']
  })

  ngOnInit(): void {
  }
  login(){
    var email=this.loginForm.value.email
    var password=this.loginForm.value.password
    this.ds.login(email,password).subscribe((result:any)=>{
      localStorage.setItem('token',result.token)
      this.router.navigateByUrl('dashboard')
    },result=>{
      alert(result.error.message)
    })
    
    
  }
}
