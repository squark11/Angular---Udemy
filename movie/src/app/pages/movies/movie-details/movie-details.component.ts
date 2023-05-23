import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movieDetails: Observable<Movie>;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
  }

  goToMovies() {
  }
}