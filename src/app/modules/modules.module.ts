import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';



@NgModule({
  declarations: [
    CategoriesComponent
  ],
  exports:[
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule {
 }
