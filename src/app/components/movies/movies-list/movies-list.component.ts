import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServices } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  movies!: any[]

  constructor(
    private moviesService: MoviesServices,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params.q);
      this.moviesService.searchMovies(params.q).subscribe(response => {
        // console.log(response);
        this.movies = response;
      })
    })
  }
}
