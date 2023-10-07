// src/app/state/student/student.actions.ts

import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Student } from '../APIClient';

export const loadStudents = createActionGroup({
    source: 'Load Students',
    events: {
      'start': emptyProps(),
  
      'Success': props<{ value: Student[] }>(),
  
      'error': props<{value: any}>,
    },
  });