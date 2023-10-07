import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetstudentComponent } from './students/getstudent/get-student.component';
import { API_BASE_URL, Client } from './APIClient';
import { APIClientService } from './services/api-client.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentEffects } from './state/student.effects';
import { studentReducer } from './state/student.reducer';
import { StudentDashboardComponent } from './students/student-dashboard/student-dashboard.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StudentTableComponent } from './students/student-dashboard/student-table/student-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    GetstudentComponent,
    StudentDashboardComponent,
    StudentTableComponent,
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ studentState: studentReducer }, { 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([StudentEffects]),
    BrowserAnimationsModule
  ],
  providers: [APIClientService, { provide: API_BASE_URL, useValue: 'http://localhost:7052' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

