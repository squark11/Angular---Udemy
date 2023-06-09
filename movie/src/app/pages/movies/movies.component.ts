import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: Observable<Movie[]>;
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.movies = this.http.getMovies();
    console.log("INITED");
  }
}
