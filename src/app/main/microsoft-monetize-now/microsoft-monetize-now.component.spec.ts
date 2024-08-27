import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftMonetizeNowComponent } from './microsoft-monetize-now.component';

describe('MicrosoftMonetizeNowComponent', () => {
  let component: MicrosoftMonetizeNowComponent;
  let fixture: ComponentFixture<MicrosoftMonetizeNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrosoftMonetizeNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicrosoftMonetizeNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
