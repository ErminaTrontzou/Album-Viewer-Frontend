import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
export class SingleAlbumService {
    private apiUrl = 'http://localhost:8080/api/v1/album/specific';

  constructor(private http: HttpClient) { }

  // Fetch a specific album by ID
  getAlbumById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url).pipe(
      catchError((error) => {
        if (error.status === 0) {
          console.error('Problem with obtaining album details from backend');
        }
        return throwError(error);
      })
    );
  }
}