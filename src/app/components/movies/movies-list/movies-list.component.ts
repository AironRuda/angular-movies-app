import { Component } from '@angular/core';
import { MoviesServices } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  constructor(private moviesServices: MoviesServices) { }

  ngOnInit(): void {
    this.moviesServices.searchMovies("dragon").subscribe(response => {
      console.log(response);
    })
  }
}
