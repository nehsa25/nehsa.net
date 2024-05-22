import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignpatternsComponent } from './designpatterns.component';

describe('DesignpatternsComponent', () => {
  let component: DesignpatternsComponent;
  let fixture: ComponentFixture<DesignpatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignpatternsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignpatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
