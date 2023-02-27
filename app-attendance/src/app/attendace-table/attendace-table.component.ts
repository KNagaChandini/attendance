import { Component } from '@angular/core';
import studentRecords from '../../assets/students.json';

@Component({
  selector: 'app-attendace-table',
  templateUrl: './attendace-table.component.html',
  styleUrls: ['./attendace-table.component.css']
})
export class AttendaceTableComponent {
  ngOnInit() {
   
  
  }

  records: any[]=studentRecords;
  
  
}
