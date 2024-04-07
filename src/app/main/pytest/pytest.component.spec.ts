import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PytestComponent } from './pytest.component';

describe('PytestComponent', () => {
  let component: PytestComponent;
  let fixture: ComponentFixture<PytestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PytestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
