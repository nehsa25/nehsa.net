import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocoComponent } from './choco.component';

describe('ChocoComponent', () => {
  let component: ChocoComponent;
  let fixture: ComponentFixture<ChocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChocoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
