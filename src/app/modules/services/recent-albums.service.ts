import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecentAlbumsService {
  private apiUrl = 'http://localhost:8080/api/v1/album/recent';

  constructor(private http: HttpClient) {}

    getRecentAlbums(): Observable<string[]> {
      return this.http.get<string[]>(this.apiUrl).pipe(
        catchError((error) => {
          if (error.status === 0) {
            console.error('Problem with obtaining recent albums from backend');
          }
          return throwError(error);
        })
      );
    }
  }
