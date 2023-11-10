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
    this.singleAlbumService.getAlbumById(this.albumId).subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.album = data[0]; 
          console.log(this.album);
        }
      },
      (error) => {
        this.albumErrorMessage = 'Problem with obtaining album details from backend';
      });
  }

  loadSongsForAlbum() {
    this.songsService.getSongsForAlbum(this.albumId).subscribe(
      (data) => {
      if(data.length == 0){
        this.songErrorMessage = 'We currently do not have any songs in this album';
      }
      this.songs = data;
      console.log(this.songs);
    },
    (error) => {
      this.songErrorMessage = 'Problem with obtaining songs from backend';
    });
  }

  calculateDuration(duration: number): string {
    const seconds = duration % 60;
    const minutes = (duration - seconds) / 60;
    return `${minutes}:${seconds}`;
  }


  calculateAlbumDuration(): string {
    let sumSeconds: number = 0;
    for(let song of this.songs){
      sumSeconds = sumSeconds + song.duration;
    }
    return this.calculateDuration(sumSeconds);
  }
  
  
}
