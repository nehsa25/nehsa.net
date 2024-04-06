import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoxygenComponent } from './doxygen.component';

describe('DoxygenComponent', () => {
  let component: DoxygenComponent;
  let fixture: ComponentFixture<DoxygenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoxygenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoxygenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
