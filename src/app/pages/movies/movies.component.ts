import { Component, OnInit } from '@angular/core';
import { MoviesService } from './service/services.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
 
  get movies() {
    return this.searchMovies.movies;
  }
  
  constructor(private searchMovies: MoviesService) {}

  ngOnInit(): void {}
}
