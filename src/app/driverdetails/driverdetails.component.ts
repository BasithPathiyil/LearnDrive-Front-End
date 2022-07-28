import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-driverdetails',
  templateUrl: './driverdetails.component.html',
  styleUrls: ['./driverdetails.component.css']
})
export class DriverdetailsComponent implements OnInit {
  product : any
  constructor(private ds:DataService,private router : Router) {
    this.product = this.ds.products
    
   }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert("Please Login!!")
      this.router.navigateByUrl('')
    }
  }
  logout(){
    this.ds.logout()
  }

}
