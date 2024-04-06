import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhaiComponent } from './ohai.component';

describe('OhaiComponent', () => {
  let component: OhaiComponent;
  let fixture: ComponentFixture<OhaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OhaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OhaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
