import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentManagmentComponent } from './tournament-managment.component';

describe('TournamentManagmentComponent', () => {
  let component: TournamentManagmentComponent;
  let fixture: ComponentFixture<TournamentManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
