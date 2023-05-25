import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {
  private url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url).
    pipe(tap(console.log));
  }
  // getMovies(): Observable<HttpResponse<Movie[]>>{
  //   return this.http.get<HttpResponse<Movie[]>>(this.url + '/movies', {observe: 'response'}).
  //   pipe(tap(console.log));
  // }
  postMovie(movie: Movie){
    return this.http.post<Movie>(this.url, movie).pipe(tap(console.log));
  }

  putMovie(movie: Movie){
    return this.http.put<Movie>(this.url+ '/' + movie.id, movie).pipe(tap(console.log));
  }

  patchMovie(movie: Partial<Movie>){
    return this.http.patch<Movie>(this.url+ '/' + movie.id, movie).pipe(tap(console.log));
  }

  deleteMovie(id: string):Observable<{}>{
    return this.http.delete<{}>(this.url+ '/' + id).pipe(tap(console.log));
  }
  makeError():Observable<HttpErrorResponse>{
    return this.http
    .delete(this.url+'/'+999)
    .pipe(tap(console.log), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse):Observable<never>{
    console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` + 
      `Returned code: ${error.status} \n`
    );
    return throwError('Something bad happend; pleas try again later.');
  }
}
