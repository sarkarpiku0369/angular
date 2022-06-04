import { Component, OnInit } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [  
    { img: "assets/images/offer.png" },  
    { img: "assets/images/offer2.png" },  
    { img: "assets/images/offer3.png" },  
    { img: "assets/images/offer.png" },   
  ]; 
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  }; 

  
  constructor() {}
  
  ngOnInit(): void {
  }

}
