import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlDbphpComponent } from './mysql-dbphp.component';

describe('MysqlDbphpComponent', () => {
  let component: MysqlDbphpComponent;
  let fixture: ComponentFixture<MysqlDbphpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysqlDbphpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlDbphpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
