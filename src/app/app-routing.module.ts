import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetstudentComponent } from './students/getstudent/get-student.component';

const routes: Routes = [
  { path: '', redirectTo: '/get-student', pathMatch: 'full' },
  {path: 'get-student', component: GetstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
