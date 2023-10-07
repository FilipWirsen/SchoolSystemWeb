import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from './student.reducer';

// Define a feature selector that selects the `student` slice of state.
export const selectStudentState = createFeatureSelector<StudentState>('studentState');

// Define a selector to get the students array.
export const selectAllStudents = createSelector(
  selectStudentState,(state) => {
    return state.students
  }
);
