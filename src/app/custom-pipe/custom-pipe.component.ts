import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  title="custom pipe example"
  constructor() { }


  student:any=[
    {
      rollNo:101,
      name:"John",
      class:"MCA",
      marks:78.35,
      gender:"male"
  },{
    rollNo:102,
      name:"Manisha",
      class:"MCA",
      marks:71.15,
      gender:"female"
  },{
    rollNo:103,
      name:"Ankita",
      class:"MCA",
      marks:95.21,
      gender:"female"
  },{
    rollNo:104,
      name:"Rohit",
      class:"MCA",
      marks:81.12,
      gender:"male"
  },{
    rollNo:105,
      name:"Vishal",
      class:"MCA",
      marks:64.14,
      gender:"male"
  }];
  ngOnInit() {
  }

}
