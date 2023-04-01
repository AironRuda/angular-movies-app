import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServices } from 'src/app/services/movies.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movie!: any

  constructor(
    private moviesService: MoviesServices,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.moviesService.searchMovieById(params.movieId).subscribe(response => {
        this.movie = response
        console.log(response);
      })
    })
  }
}
