import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  movieTitle!: string
  constructor(private router: Router) { }
  buscarPeliculas(event: Event) {
    event.preventDefault()
    this.router.navigate(["/movies"], { queryParams: { q: this.movieTitle } })
  }
}
