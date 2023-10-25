import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories-service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  categories: any[] = [
    { name: 'Category 1', picture: 'path-to-image-1.jpg' },
  { name: 'Category 2', picture: 'path-to-image-2.jpg' },
  ];
  errorMessage: string = ''; 
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoriesService.getCategories().subscribe(
      (data) => {
        console.log('Fetched data:', data);
        this.categories = data;
      },
      (error) => {
        this.errorMessage = 'Problem with obtaining categories from the backend';
      }
    );
  }
  
}
