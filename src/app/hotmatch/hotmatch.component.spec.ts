import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmatchComponent } from './hotmatch.component';

describe('HotmatchComponent', () => {
  let component: HotmatchComponent;
  let fixture: ComponentFixture<HotmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
