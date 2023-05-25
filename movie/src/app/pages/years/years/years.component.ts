import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent {
  years: Observable<string[]>;
  constructor(public http: HttpService) {}

  ngOnInit() {
    this.years = this.http.getYears();
  }
}
