import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsByGenreComponent } from './albums-by-genre.component';

describe('AlbumsByGenreComponent', () => {
  let component: AlbumsByGenreComponent;
  let fixture: ComponentFixture<AlbumsByGenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsByGenreComponent]
    });
    fixture = TestBed.createComponent(AlbumsByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
