import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/APIClient';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentTableComponent{

  dataSource = new MatTableDataSource<Student>();

  @Input() set students(data: Student[]) {
     this.dataSource.data = data;
     console.log(this.dataSource.data);
  }
  displayedColumns: string[] = ['StudentId', 'FirstName', 'LastName'];

}
