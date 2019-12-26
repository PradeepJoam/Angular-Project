import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer-cust-data',
  templateUrl: './customer-cust-data.component.html',
  styleUrls: ['./customer-cust-data.component.css']
})
export class CustomerCustDataComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  searchData=[];
  ngOnInit() {
  }
 
  validData=false;
  
  searchByNameData(txt)
  {
    this.customerService.searchByNameData(txt).subscribe((values)=>{
    
     for(let i=0;i<values.length;i++)
     {
      console.log(this.searchData.push(values[i]));
     }
     
    })
    this.validData=true;
   // console.log(this.searchData)
    //debugger
   
   
    
  }
}
