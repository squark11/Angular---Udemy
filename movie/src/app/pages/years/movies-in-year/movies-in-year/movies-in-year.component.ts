import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movies-in-year',
  templateUrl: './movies-in-year.component.html',
  styleUrls: ['./movies-in-year.component.css']
})
export class MoviesInYearComponent {
  movies: Observable<Movie[]>
  constructor ( public http: HttpService, public route: ActivatedRoute){};

  ngOnInit(): void {   
    this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.http.getMoviesFromYear(params.get('year'))
      )
    );
  }
}
