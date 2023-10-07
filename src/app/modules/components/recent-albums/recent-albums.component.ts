import { RecentAlbumsService } from './../../services/recent-albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-albums',
  templateUrl: './recent-albums.component.html',
  styleUrls: ['./recent-albums.component.scss']
})
export class RecentAlbumsComponent  implements OnInit{
  recentAlbums: any[] = [];
  errorMessage: string = '';
  constructor(private recentAlbumsService: RecentAlbumsService) { }


  ngOnInit()  {
    this.fetchRecentAlbums();
  }

  fetchRecentAlbums() {
   this.recentAlbumsService.getRecentAlbums().subscribe(
     (data) => {
       this.recentAlbums = data;
     },
     (error) => {
       this.errorMessage = 'Problem with obtaining recent albums from backend';
     }
   ) 
  }

  
}
