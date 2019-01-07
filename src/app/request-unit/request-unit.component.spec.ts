import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUnitComponent } from './request-unit.component';

describe('RequestUnitComponent', () => {
  let component: RequestUnitComponent;
  let fixture: ComponentFixture<RequestUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
