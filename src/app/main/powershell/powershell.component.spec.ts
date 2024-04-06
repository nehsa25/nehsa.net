import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowershellComponent } from './powershell.component';

describe('PowershellComponent', () => {
  let component: PowershellComponent;
  let fixture: ComponentFixture<PowershellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowershellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowershellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
