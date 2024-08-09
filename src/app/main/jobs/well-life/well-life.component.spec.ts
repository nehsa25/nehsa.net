import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellLifeComponent } from './well-life.component';

describe('WellLifeComponent', () => {
  let component: WellLifeComponent;
  let fixture: ComponentFixture<WellLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WellLifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WellLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
