import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, firstValueFrom, map, tap } from 'rxjs';
import { Student } from 'src/app/APIClient';
import { loadStudents } from 'src/app/state/student.actions';
import { selectAllStudents } from 'src/app/state/student.selectors';
import { MatTableDataSource } from '@angular/material/table'
import { StudentState } from 'src/app/state/student.reducer';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentDashboardComponent implements OnInit {
  displayedColumns: string[] = ['StudentId', 'FirstName', 'LastName'];
  public observables$;
  constructor(private store: Store, private changeDetectorRef: ChangeDetectorRef) {
    this.observables$ = combineLatest([
      this.store.select(selectAllStudents)
  ]).pipe(
      map(([students]) => ({
      students
  })));
  }

ngOnInit() {
  this.store.dispatch(loadStudents.start());

}


}
