import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})


export class TeachersComponent implements OnInit {

  teachersData;

  teachers: any = [

    {
      name: 'Waqar naqvi', age: '37', edu: 'BSCS', exp: '5 year', special: 'Bussines Development', gender: 'Male', img: 'assets/images/teachers/waqar-naqvi.jpg'
    },

    {
      name: 'AlSid', age: '33', edu: '38', exp: '7 year', special: 'Marketing', gender: 'Male', img: 'assets/images/teachers/placeholder.png'
    },

    {
      name: 'Jawad asgar', age: '36', edu: 'BSCS', exp: '3 year', special: 'Human Resource', gender: 'Male', img: 'assets/images/teachers/placeholder.png'
    },

    {
      name: 'Aqeel slam', age: '33', edu: 'BSCS', exp: '10 year', special: 'Project Manager', gender: 'Male', img: 'assets/images/teachers/aqeel_aslam.jpg'
    },

    {
      name: 'Moeez', age: '28', edu: 'BSCS', exp: '2 year', special: 'Dispatcher', gender: 'Male', img: 'assets/images/teachers/placeholder.png'
    },

    {
      name: 'Faraz', age: '19', edu: 'BSCS', exp: '6 Month', special: 'N/A', gender: 'Male', img: 'assets/images/teachers/placeholder.png'
    },



  ]

  constructor(private teacherData: ApiDataService) { }

  ngOnInit() {

    this.teacherData.getApiData().subscribe({
      next: data => this.teachersData = data.data
    })

  }

}
