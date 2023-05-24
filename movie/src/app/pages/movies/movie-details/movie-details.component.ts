import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movieDetails: Observable<Movie>;

  constructor(
    private http: HttpService, 
    private route: ActivatedRoute,
    private location:Location
    ) {
  }

  ngOnInit() {
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> this.http.getMovie(params.get('id')))
    )
  }

  goToMovies() {
    this.location.back();
  }
}
