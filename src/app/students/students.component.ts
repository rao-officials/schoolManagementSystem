import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})



export class StudentsComponent implements OnInit {

  name = "max";
  receivedData;


   Students: any =
    [
      { id: 1, name: 'Haseeb', rollno: 'MCE-F-018', class: 'MCS', gender: 'Male', img: 'assets/images/students/Haseeb.png' },
      { id: 2, name: 'Adnan Javid', rollno: 'GC-s14-29', class: 'BSCS', gender: 'Male', img: 'assets/images/students/adnan.jpg' },
      { id: 3, name: 'Waqas jamil', rollno: 'UOL-d15-458', class: 'MCS', gender: 'Male', img: 'assets/images/students/waqas.jpg' },
      { id: 4, name: 'Zain', rollno: 'UMT-s13-098', class: 'BSSE', gender: 'Male', img: 'assets/images/students/zain.jpg' },
      { id: 5, name: 'Talha Bukhari', rollno: 'GC-F11-121', class: 'BS', gender: 'Male', img: 'assets/images/students/talha.png' },
      { id: 6, name: 'Ameer', rollno: 'MC-F19-11', class: 'Matric', gender: 'Male', img: 'assets/images/students/ameer.jpg' },
    ];
    


   
   



  studentStatus = "Active";

  stuStatus() {
    return this.studentStatus;
  }


  constructor(private mydata : ApiDataService) {

    // console.log(this.pop(Students));
  }

  ngOnInit() {
    this.mydata.getApiData().subscribe({
      next:data => this.receivedData = data.data
    })


  }
  

}



