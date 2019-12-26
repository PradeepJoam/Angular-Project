import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

/*public employee=[
  {'empId':101,'empName':'John','empSalary':20000,'empAge':21},
  {'empId':102,'empName':'Rohit','empSalary':45000,'empAge':25},
  {'empId':103,'empName':'Manish','empSalary':15000,'empAge':23},
  {'empId':104,'empName':'Nikita','empSalary':36000,'empAge':19},
  {'empId':105,'empName':'Pankaj','empSalary':55000,'empAge':24},
];
*/
public employee=[];
pinCode:number;
  constructor(private employeeService :EmployeeService) { }
  public persondata = [];
  ngOnInit() {

    //this.employee=this.employeeService.getEmployeeService();
    this.employeeService.getEmployeeService()
    .subscribe(data=>this.employee=data);

  /*  this.employeeService.getData().subscribe(data => {
     /* this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);

      
      
    //  this.persondata.push(data);
   

    for (var myOrder in data) 
    {
      
          console.log( data[myOrder]);
          this.persondata.push(data[myOrder]);
      
    }
   }, error => console.error(error));*/
  }

 
  findPinLocation()
  {
    this.employeeService.getData(this.pinCode).subscribe(data => {
       
     for (var myVal in data) 
     {
          console.log( data[myVal]);
           this.persondata.push(data[myVal]);
       
     }
    
    }, error => console.error(error));


    this.persondata=[];
  }
}
