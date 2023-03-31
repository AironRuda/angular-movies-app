import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServices {
  private urlBase = "https://anime-db.p.rapidapi.com";
  private headres = {
    'X-RapidAPI-Key': '0df2c0b421msh775aa9ccb6deedbp12c3cbjsnbb767673db4c',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
  constructor(private http: HttpClient) { }
  searchMovies(title: string): Observable<any> {
    return this.http.get(this.urlBase + "/anime", {
      headers: this.headres, params: { page: '1', size: '20', search: title }
    })
      .pipe(map((response: any) => response.data))
  }
}
