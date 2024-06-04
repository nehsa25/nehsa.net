import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GliderComponent } from './glider.component';

describe('GliderComponent', () => {
  let component: GliderComponent;
  let fixture: ComponentFixture<GliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
