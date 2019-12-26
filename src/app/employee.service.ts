import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInf } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //pinCode:number;
  private url_data:string= "/assets/data/EmployeeService1.json";

 // private url_data_pin_code="https://api.postalpincode.in/pincode/"+this.pinCode;
  constructor(private http:HttpClient) { }


  getData(pincode) {
    ///this.pinCode=pincode;
   var  url_data_pin_code="https://api.postalpincode.in/pincode/"+pincode;
    return this.http.get(url_data_pin_code);
 }

getEmployeeService():Observable<EmployeeInf[]>
{
  return this.http.get<EmployeeInf[]>(this.url_data);
            

 /*return [
    {'empId':101,'empName':'John','empSalary':20000,'empAge':21},
    {'empId':102,'empName':'Rohit','empSalary':45000,'empAge':25},
    {'empId':103,'empName':'Manish','empSalary':15000,'empAge':23},
    {'empId':104,'empName':'Nikita','empSalary':36000,'empAge':19},
    {'empId':105,'empName':'Pankaj','empSalary':55000,'empAge':24},
  ];*/
}




}
