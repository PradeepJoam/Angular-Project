import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFirebasesComponent } from './google-firebases.component';

describe('GoogleFirebasesComponent', () => {
  let component: GoogleFirebasesComponent;
  let fixture: ComponentFixture<GoogleFirebasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleFirebasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleFirebasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
