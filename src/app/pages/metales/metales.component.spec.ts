import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalesComponent } from './metales.component';

describe('MetalesComponent', () => {
  let component: MetalesComponent;
  let fixture: ComponentFixture<MetalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
