import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCustDataComponent } from './customer-cust-data.component';

describe('CustomerCustDataComponent', () => {
  let component: CustomerCustDataComponent;
  let fixture: ComponentFixture<CustomerCustDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCustDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCustDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
