import { Component, OnInit} from '@angular/core';

// import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

 

  
  studentName:string;
   studentrollNo:any;
   studentClass:string;
   studentGender:string;



addstudent(){



// this.Students.push(this.studentName,this.studentrollNo,this.studentClass,this.studentGender );
console.log(this.studentName+' '+this.studentrollNo+' '+this.studentClass+' '+this.studentGender)


}

constructor() { }

  ngOnInit() {
  }

}
