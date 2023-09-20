import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { AlbumsComponent } from './modules/pages/albums/albums.component';
import { ArtistsComponent } from './modules/pages/artists/artists.component';

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
