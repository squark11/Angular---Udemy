import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css']
})
export class MoviesInCategoryComponent {
  movies: Observable<Movie[]>;

  constructor(private http:HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    // const category = this.route.snapshot.paramMap.get('category');
    // this.movies = this.http.getMoviesFromCategory(category);
     this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.http.getMoviesFromCategory(params.get('category'))
      )
    );
  }
}
