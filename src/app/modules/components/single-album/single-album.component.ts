import { SongsService } from './../../services/songs-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleAlbumService } from '../../services/single-album-service';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.scss']
})
export class SingleAlbumComponent implements OnInit {
  albumId: number = 0;
  albumErrorMessage: string = '';
  songErrorMessage: string = '';
  album: any; 
  songs: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private singleAlbumService: SingleAlbumService,
    private songsService: SongsService) {}

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
        this.albumId = params['id'];
        this.loadAlbumDetails();
        this.loadSongsForAlbum();
      });
  }

  loadAlbumDetails() {
    // Use the albumId to fetch album details from your API
    this.singleAlbumService.getAlbumById(this.albumId).subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.album = data[0]; 
          //console.log(this.album);
        }
      },
      (error) => {
        this.albumErrorMessage = 'Problem with obtaining album details from backend';
      });
  }

  loadSongsForAlbum() {
    // Use the albumId to fetch songs for the specific album
    this.songsService.getSongsForAlbum(this.albumId).subscribe(
      (data) => {
      if(data.length == 0){
        this.songErrorMessage = 'We currently cannot provide you with the songs of this album';
      }
      this.songs = data;
      //console.log(this.songs);
    },
    (error) => {
      this.songErrorMessage = 'Problem with obtaining songs from backend';
    });
  }
  
}
