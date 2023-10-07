import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllAlbumsService {
  private apiUrl = 'http://localhost:8080/api/v1/album';

  constructor(private http: HttpClient) {}

    getAllAlbums(): Observable<string[]> {
      return this.http.get<string[]>(this.apiUrl).pipe(
        catchError((error) => {
          if (error.status === 0) {
            console.error('Problem with obtaining albums from backend');
          }
          return throwError(error);
        })
      );
    }
  }