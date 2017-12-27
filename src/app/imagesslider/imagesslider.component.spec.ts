import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagessliderComponent } from './imagesslider.component';

describe('ImagessliderComponent', () => {
  let component: ImagessliderComponent;
  let fixture: ComponentFixture<ImagessliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagessliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagessliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
