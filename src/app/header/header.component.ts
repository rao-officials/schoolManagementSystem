import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  addStudent='flase';


addNumber(){
  setTimeout(function()
  {
     alert("Set Time Function called"); 
    
  }, 3000);

}
  
  
  constructor() {}

  ngOnInit() {
  }

}
