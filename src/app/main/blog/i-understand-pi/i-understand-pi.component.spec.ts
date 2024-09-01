import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IUnderstandPiComponent } from './i-understand-pi.component';

describe('IUnderstandPiComponent', () => {
  let component: IUnderstandPiComponent;
  let fixture: ComponentFixture<IUnderstandPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IUnderstandPiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IUnderstandPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
