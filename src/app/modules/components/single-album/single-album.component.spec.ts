import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAlbumComponent } from './single-album.component';

describe('SingleAlbumComponent', () => {
  let component: SingleAlbumComponent;
  let fixture: ComponentFixture<SingleAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleAlbumComponent]
    });
    fixture = TestBed.createComponent(SingleAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
