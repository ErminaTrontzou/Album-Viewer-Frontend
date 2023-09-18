import { CategoriesComponent } from './components/categories/categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    AboutComponent
  ],
  exports: [
    CategoriesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
