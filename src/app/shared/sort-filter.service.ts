import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortFilterService {


  sortData(data: any[], sortBy: string): any[] {
    switch (sortBy) {
      case 'Artist Name (Asc)':
        return data.sort((a, b) => a.artistName.localeCompare(b.artistName));
      case 'Artist Name (Desc)':
        return data.sort((a, b) => b.artistName.localeCompare(a.artistName));
      case 'Release Date (Asc)':
        return data.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
      case 'Release Date (Desc)':
        return data.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
      case 'Choose an option':
        return data;
      default:
        return data;
    }
  }
}