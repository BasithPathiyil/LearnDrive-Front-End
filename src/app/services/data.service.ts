import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products : any
  constructor(private http : HttpClient,private router:Router) {
    
   }
  
  register(email : any,username : any,password:any){
    const data = {
      email,
      username,
      password

    }
    return this.http.post('http://localhost:3000/register',data)

  }
  registerdriver(name :any,age:any,gender:any,vehicles:any,location:any,mobilenumber:any,emailid:any){
    const token = localStorage.getItem('token')
    const data = {
      token,
      name,
      age,
      gender,
      vehicles,
      location,
      mobilenumber,
      emailid
    }
    return this.http.post('http://localhost:3000/registerdriver',data)
  }
  login(email:any,password:any){
    const data={
      email,
      password
    }
    return this.http.post('http://localhost:3000/login',data)
  }
  viewProducts(){
    return this.http.get('http://localhost:3000/dashboard')
  }
  details(driverId : any){
    
    const data={
      driverId
    }
    
     this.http.post('http://localhost:3000/detail',data).subscribe((result:any)=>{
      this.products=result
      
      this.router.navigateByUrl('driverdetails')
      
     })
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  }
}
