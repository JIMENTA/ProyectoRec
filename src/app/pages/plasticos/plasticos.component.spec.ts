import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticosComponent } from './plasticos.component';

describe('PlasticosComponent', () => {
  let component: PlasticosComponent;
  let fixture: ComponentFixture<PlasticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
