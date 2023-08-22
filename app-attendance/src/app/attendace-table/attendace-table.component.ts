import { Component } from '@angular/core';
// import studentRecords from '../../assets/students.json';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-attendace-table',
  templateUrl: './attendace-table.component.html',
  styleUrls: ['./attendace-table.component.css']
})
export class AttendaceTableComponent {
  public records: any[] | undefined;
  constructor(public httpClient: HttpClient){
    this.httpClient.get<any[]>('http://localhost:3000/get-attendance').subscribe((res)=>{
    this.records=res;
  }
)};
  
// Add records method
addStudent(){
  alert('hello')
}

}
