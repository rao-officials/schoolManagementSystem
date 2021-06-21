import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  apiDataReceived:any;

  constructor(private http:HttpClientModule) { }



  private heroesUrl = 'https://reqres.in/api/users?page=2';  // URL to web api




getApiData(){
  this.apiDataReceived.get('herourl');
}







}
