import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registre1Component } from './registre1.component';

describe('Registre1Component', () => {
  let component: Registre1Component;
  let fixture: ComponentFixture<Registre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registre1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
