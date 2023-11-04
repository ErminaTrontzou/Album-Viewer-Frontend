import { Component, OnInit } from '@angular/core';
import { AllAlbumsService } from '../../services/all-albums-service';
import { SortFilterService } from '../../../shared/sort-filter.service';

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

  selectedSortBy: string = 'Choose an option';

  sortByOptions: string[] = [
    'Artist Name (Asc)',
    'Artist Name (Desc)',
    'Release Date (Asc)',
    'Release Date (Desc)',
    'Choose an option'
  ];

  constructor(
    private allAlbumsService: AllAlbumsService,
    private sortFilterService: SortFilterService) { }

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
  sortAlbums() {
    this.allAlbums = this.sortFilterService.sortData(this.allAlbums, this.selectedSortBy);
  }



}
