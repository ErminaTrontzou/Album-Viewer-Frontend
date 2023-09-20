import { CategoriesComponent } from './components/categories/categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    AboutComponent,
    HomeComponent
  ],
  exports: [
    CategoriesComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
