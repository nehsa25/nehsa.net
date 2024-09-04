import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KestrelComponent } from './kestrel.component';

describe('KestrelComponent', () => {
  let component: KestrelComponent;
  let fixture: ComponentFixture<KestrelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KestrelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KestrelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
