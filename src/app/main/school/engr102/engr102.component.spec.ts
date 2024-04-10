import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Engr102Component } from './engr102.component';

describe('Engr102Component', () => {
  let component: Engr102Component;
  let fixture: ComponentFixture<Engr102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Engr102Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Engr102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
