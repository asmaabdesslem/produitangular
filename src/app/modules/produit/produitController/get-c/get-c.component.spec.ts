import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCComponent } from './get-c.component';

describe('GetCComponent', () => {
  let component: GetCComponent;
  let fixture: ComponentFixture<GetCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
