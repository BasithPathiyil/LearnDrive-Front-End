import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products : any
  image:any
  image1:any
  driverId=""
  constructor(private router:Router,private ds :DataService) {
    this.image1='/assets/images/images2.jpg'
    this.image='/assets/images/images1.jpg'
    
    
   }
   
  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert("Please Login!!")
      this.router.navigateByUrl('')
    }
    
  }
  viewProducts(){
    this.ds.viewProducts().subscribe((result:any)=>{
      
      this.products = result
    })
  }
  driverregister(){
    
    this.router.navigateByUrl('driverregister')
  }
  details(event : any){
    this.ds.details(event.target.id)
    
  }
  logout(){
    this.ds.logout()
  }
  
}
