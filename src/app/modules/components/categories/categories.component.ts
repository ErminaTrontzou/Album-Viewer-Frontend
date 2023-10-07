import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  categories: string[] = [];
  errorMessage: string = ''; 
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoriesService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        this.errorMessage = 'Problem with obtaining categories from backend'; 
      }
    );
  }
}
