import { CategoriesComponent } from './components/categories/categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CategoriesComponent
  ],
  exports: [
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
