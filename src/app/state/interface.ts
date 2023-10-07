import { Student } from "../APIClient";

interface AppState {
    student: {
      students: Student[];
      // ... any other properties related to students
    };
    // ... any other top-level state properties
  }
  