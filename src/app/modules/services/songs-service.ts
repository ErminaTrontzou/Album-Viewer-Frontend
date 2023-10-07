import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private apiUrl = 'http://localhost:8080/api/v1/song/specific-album';

  constructor(private http: HttpClient) { }

  getSongsForAlbum(albumId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${albumId}`;
    return this.http.get<any[]>(url).pipe(
      catchError((error) => {
        if (error.status === 0) {
          console.error('Problem with obtaining songs from backend');
        }
        return throwError(error);
      })
    );
  }
}
