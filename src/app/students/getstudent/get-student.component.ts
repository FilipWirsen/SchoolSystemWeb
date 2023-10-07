import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Client, Student } from 'src/app/APIClient';
import { APIClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.scss']
})
export class GetstudentComponent {

  public student = new Student();
  constructor(private apiClient: APIClientService, private changeDetectorRef: ChangeDetectorRef) {}


  public async getStudent() {
    this.apiClient.getStudent(1).subscribe(data => {
      this.student = data;
    });
  }
}


