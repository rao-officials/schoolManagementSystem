import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  val_1: string = "";
  val_2: string = "";
  greater: string = "";



  managementArray:number[]=[1,2,3,4,5,6,7,8,9,10];
  




  constructor() { }
  // greaterNumber() {
  //   alert('in function')
  //   var first: number = 13;
  //   var second: number = 78;
  //   var checker: number;

  //   if (first > second) {
  //     checker = first;
  //     console.log('greatest no is' + checker)
  //   }

  //   else {
  //     checker = second;
  //     console.log('geratest no is' + checker)

  //   }


  // }



  checkResult() {
    if (this.val_1 > this.val_2) {
      this.greater = this.val_1;
      console.log('The Heighest no is' + this.greater);
    }

    else if (this.val_1 == this.val_2) {
      alert('Both number are same')
    }

    else {
      this.greater = this.val_2;
      console.log('The Heighest no is' + this.greater);
    }

  }




  ngOnInit() {
  }

}
