import { Component, OnInit } from '@angular/core';
import { AllAlbumsService } from '../../services/all-albums-service';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.scss']
})
export class AllAlbumsComponent implements OnInit{
  allAlbums: any[] = [];
  errorMessage: string = '';
  page: number = 1;
  pageSize: number = 6;
  constructor(private allAlbumsService: AllAlbumsService) { }

  ngOnInit(): void {
    this.fetchAllAlbums();
  }

  fetchAllAlbums() {
    this.allAlbumsService.getAllAlbums().subscribe(
      (data) => {
        this.allAlbums = data;
      },
      (error) => {
        this.errorMessage = 'Problem with obtaining albums from backend';
      }
    )   
  }

}
