import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { AlbumsComponent } from './modules/pages/albums/albums.component';
import { ArtistsComponent } from './modules/pages/artists/artists.component';
import { AlbumComponent } from './modules/pages/album/album.component';
import { AlbumsByGenreComponent } from './modules/pages/albums-by-genre/albums-by-genre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'artists',
    component: ArtistsComponent
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  },
  {
    path: 'genre/:genreName',
    component: AlbumsByGenreComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
