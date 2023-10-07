// src/app/state/student/student.effects.ts

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as studentActions from './student.actions';
import { APIClientService } from '../services/api-client.service';
import { of } from 'rxjs';

@Injectable()
export class StudentEffects {

    loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentActions.loadStudents.start),
      mergeMap(() => this.apiClient.getAllStudents()
        .pipe(
          map(students => studentActions.loadStudents.success({ value: students })),
          catchError(err => of(studentActions.loadStudents.error()))
        )
      )
    )
  );


  constructor(private actions$: Actions, private apiClient: APIClientService) {}
}
