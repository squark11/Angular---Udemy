import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent {
  errorMessage: string;
  constructor(private http: HttpMoviesService) {}

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    const movie: Movie ={
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło.',
      poster: null,
      year: '2001',
      title: 'Wiedźmin',
      imdbRating: '10.0',
    };
    
    this.http.postMovie(movie).subscribe();
  }

  put() {

    const movie: Movie ={
      id: '54',
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło.',
      poster: null,
      year: '2001',
      title: 'Wiedźmin 2',
      imdbRating: '10.0',
    };
    
    this.http.putMovie(movie).subscribe();
  }

  patch() {
    const movie: Partial<Movie> ={
      id: '55',
      plot: ' Gerald szuka Ciri',
    };
    
    this.http.patchMovie(movie).subscribe();
  }

  delete() {
    this.http.deleteMovie('56').subscribe();
  }
  error() {
    this.http.makeError().subscribe({error: (err:string) => (this.errorMessage = err) });
  }
}
