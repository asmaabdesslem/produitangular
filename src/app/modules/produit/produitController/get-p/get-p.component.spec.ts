import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPComponent } from './get-p.component';

describe('GetPComponent', () => {
  let component: GetPComponent;
  let fixture: ComponentFixture<GetPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
