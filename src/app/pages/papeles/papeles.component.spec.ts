import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelesComponent } from './papeles.component';

describe('PapelesComponent', () => {
  let component: PapelesComponent;
  let fixture: ComponentFixture<PapelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
