import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicosComponent } from './organicos.component';

describe('OrganicosComponent', () => {
  let component: OrganicosComponent;
  let fixture: ComponentFixture<OrganicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
