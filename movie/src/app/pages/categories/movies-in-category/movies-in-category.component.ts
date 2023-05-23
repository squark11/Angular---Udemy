import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css']
})
export class MoviesInCategoryComponent {
  movies: Observable<Movie[]>;

  constructor() {}

  ngOnInit() {}
}
