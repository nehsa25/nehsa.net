import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisWebsiteComponent } from './this-website.component';

describe('ThisWebsiteComponent', () => {
  let component: ThisWebsiteComponent;
  let fixture: ComponentFixture<ThisWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThisWebsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThisWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
