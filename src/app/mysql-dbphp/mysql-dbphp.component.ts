import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-mysql-dbphp',
  templateUrl: './mysql-dbphp.component.html',
  styleUrls: ['./mysql-dbphp.component.css']
})
export class MysqlDbphpComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  storeData:boolean;

  studentList:Student[];

  constructor(private formBuilder: FormBuilder,private studentService:StudentService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

   
    if (this.registerForm.invalid) {
        return;
    }

   this.studentService.createStudentData(this.registerForm.value).subscribe(res=>{

    console.log("Testing", res);
   
    this.storeData=true;
    this.resetFormData();
  
  
  },
  error => {
    console.error('errorMsg',error );   
  }
    );
}
    loadPhpData()
    {
  
      this.storeData=false;
      this.studentService.getStudentList().subscribe(
        (myData:Student[])=>{
            this.studentList=myData;
          
            console.log(this.studentList);
        }
      );
    }

    deleteStudentData(student:Student):void
    {
      this.storeData=false;
      this.studentService.deleteStudentData(student.stId).subscribe(
        (myData)=>{
            this.studentList=this.studentList.filter(id=>id!==student)
            console.log(this.studentList);
        }
      );
    }

    getStudentListById(stId:number):void
    {
      this.storeData=false;
      console.log(stId);
     this.studentService.getStudentListById(stId).subscribe(
        (myData:Student[])=>{
            this.studentList=myData;
            console.log(this.studentList);
        }
      );
      this.studentList=[];
    }

    resetFormData()
    {
      this.registerForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        password: [''],
      });
     
    }

    updateStudentData(id:number,student:Student):void
    {

      console.log(id)
      console.log(student)
      /*this.studentService.updateStudentData(id,this.registerForm.value).subscribe(
      res=>{

          console.log("Testing", res);
         
          this.storeData=false;
          this.resetFormData();
        
        
        },
        error => {
          console.error('errorMsg',error );   
        }
      );*/
    }


}
