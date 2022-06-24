//import { Movies } from './../../../interface/movie.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies = [];

  constructor(private http: HttpClient) {

    
    this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=cd6b3c86007e7e3c18b3a90217b86cc4")
      .subscribe((res: any) => {
        this.movies = res;
        console.log(res);
        
    })
   }
}
