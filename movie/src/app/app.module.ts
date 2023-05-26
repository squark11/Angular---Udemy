import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { YearsComponent } from './pages/years/years/years.component';
import { MoviesInYearComponent } from './pages/years/movies-in-year/movies-in-year/movies-in-year.component';
import { HttpTestComponent } from './pages/http-test/http-test/http-test.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MoviesComponent,
    PageNotFoundComponent,
    MoviesInCategoryComponent,
    MovieDetailsComponent,
    MovieCoverComponent,
    YearsComponent,
    MoviesInYearComponent,
    HttpTestComponent,
    AddMovieComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
