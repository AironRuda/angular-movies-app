import { Component } from '@angular/core';
import { MoviesServices } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  movies!: any[]

  constructor(private moviesServices: MoviesServices) { }

  ngOnInit(): void {
    this.moviesServices.searchMovies("fullmetal").subscribe(response => {
      console.log(response);
      this.movies = response;
    })
  }
}
