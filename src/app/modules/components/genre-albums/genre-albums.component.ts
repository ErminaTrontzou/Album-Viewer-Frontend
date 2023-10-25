import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreAlbumsService } from '../../services/genre-albums-service';



@Component({
  selector: 'app-genre-albums',
  templateUrl: './genre-albums.component.html',
  styleUrls: ['./genre-albums.component.scss']
})
export class GenreAlbumsComponent implements OnInit{
  genreName: string = '';
  albumErrorMessage: string = '';
  genreAlbums: any[] = [];
  page: number = 1;
  pageSize: number = 6;
  errorMessage: string = ''	;

  constructor(
    private route: ActivatedRoute,
    private albumByGenreService: GenreAlbumsService
  ){}

  ngOnInit(): void{
    this.route.params.subscribe((params) => {
      this.genreName = params['genreName']; // Use 'genreName' instead of 'genre'
      console.log('Genre Name:', this.genreName);
      this.loadAlbumsByGenre();
    });
  }

  loadAlbumsByGenre() {
    this.albumByGenreService.getAlbumsByGenre(this.genreName).subscribe(
      (data) => {
        if(data.length == 0){
          this.albumErrorMessage = 'We currently do not have any albums of this genre';
        }
          this.genreAlbums = data; // Assign the data to genreAlbums
          console.log(this.genreAlbums);
      },
      (error) => {
        this.errorMessage = 'Problem with obtaining album details from backend';
      });
  }

}
