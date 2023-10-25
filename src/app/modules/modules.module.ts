import { CategoriesComponent } from './components/categories/categories.component';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { RecentAlbumsComponent } from './components/recent-albums/recent-albums.component';
import { AllAlbumsComponent } from './components/all-albums/all-albums.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlbumComponent } from './pages/album/album.component';
import { SingleAlbumComponent } from './components/single-album/single-album.component';
import { AlbumsByGenreComponent } from './pages/albums-by-genre/albums-by-genre.component';
import { GenreAlbumsComponent } from './components/genre-albums/genre-albums.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AboutComponent,
    HomeComponent,
    AlbumsComponent,
    ArtistsComponent,
    RecentAlbumsComponent,
    AllAlbumsComponent,
    AlbumComponent,
    SingleAlbumComponent,
    AlbumsByGenreComponent,
    GenreAlbumsComponent
  ],
  exports: [
    CategoriesComponent,
    AboutComponent,
    HomeComponent,
    AlbumsComponent,
    ArtistsComponent,
    AlbumComponent,
    AlbumsByGenreComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ]
})
export class ModulesModule { }
