import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncioComponent } from './asyncio.component';

describe('AsyncioComponent', () => {
  let component: AsyncioComponent;
  let fixture: ComponentFixture<AsyncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
