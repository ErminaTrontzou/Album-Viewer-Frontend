import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreAlbumsComponent } from './genre-albums.component';

describe('GenreAlbumsComponent', () => {
  let component: GenreAlbumsComponent;
  let fixture: ComponentFixture<GenreAlbumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreAlbumsComponent]
    });
    fixture = TestBed.createComponent(GenreAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
