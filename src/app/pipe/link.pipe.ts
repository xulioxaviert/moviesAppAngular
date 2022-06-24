import { Movies } from './../interface/movie.interface';
import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'link'
})

export class LinkPipe implements PipeTransform {

    transform(movies: Movies): string {
        return `details/${movies.id}`;
    }

}