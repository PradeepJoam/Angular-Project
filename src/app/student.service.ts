import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
  export class StudentService {
    constructor(private httpClient:HttpClient) { }
  

    createStudentData(student:Student)
    {
     
     return this.httpClient.post("http://localhost/angular/create.php",student);
    }


  getStudentList()
  {
   return this.httpClient.get<Student[]>("http://localhost/angular/list.php");
  }

  deleteStudentData(stId:number)
  {
   return this.httpClient.delete<Student[]>("http://localhost/angular/list.php?delId="+stId);
  }

  getStudentListById(stId:number)
  {
    return this.httpClient.get<Student[]>("http://localhost/angular/list.php?selId="+stId);
  }

  updateStudentData(id:number,student:Student)
  {
    console.log(student);
    return this.httpClient.put("http://localhost/angular/update.php?upId="+id,student);
  }

}
