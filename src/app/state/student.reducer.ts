// src/app/state/student/student.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { Student } from '../APIClient';
import { loadStudents } from './student.actions';

export interface StudentState {
  students: Student[];
}

export const initialState: StudentState = {
  students: []
};

export const studentReducer = createReducer(
  initialState,
  on(loadStudents.success, (state, action) => {
    return { ...state, students: action.value };
  })
);
