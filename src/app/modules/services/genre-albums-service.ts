import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
export class GenreAlbumsService {
    private apiUrl = 'http://localhost:8080/api/v1/album/genre';

    constructor(private http: HttpClient) {}

    // Fetch albums by genre
    getAlbumsByGenre(genre: string): Observable<any> {
        const url = `${this.apiUrl}/${genre}`;
        return this.http.get(url).pipe(
            catchError((error) => {
                if (error.status === 0) {
                    console.error('Problem with obtaining albums from backend');
                }
                return throwError(error);
            })
        );
    }
}