import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavbooksComponent } from './favbooks.component';

describe('FavbooksComponent', () => {
  let component: FavbooksComponent;
  let fixture: ComponentFixture<FavbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
