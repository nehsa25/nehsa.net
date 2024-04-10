import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ph207Component } from './ph207.component';

describe('Ph207Component', () => {
  let component: Ph207Component;
  let fixture: ComponentFixture<Ph207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ph207Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ph207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
