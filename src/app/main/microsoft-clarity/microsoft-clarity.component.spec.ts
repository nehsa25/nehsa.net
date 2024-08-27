import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftClarityComponent } from './microsoft-clarity.component';

describe('MicrosoftClarityComponent', () => {
  let component: MicrosoftClarityComponent;
  let fixture: ComponentFixture<MicrosoftClarityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrosoftClarityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicrosoftClarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
