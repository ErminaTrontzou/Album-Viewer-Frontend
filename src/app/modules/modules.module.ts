import { CategoriesComponent } from './components/categories/categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { ArtistsComponent } from './pages/artists/artists.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    AboutComponent,
    HomeComponent,
    AlbumsComponent,
    ArtistsComponent
  ],
  exports: [
    CategoriesComponent,
    AboutComponent,
    HomeComponent,
    AlbumsComponent,
    ArtistsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
