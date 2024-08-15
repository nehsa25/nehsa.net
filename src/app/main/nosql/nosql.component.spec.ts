import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosqlComponent } from './nosql.component';

describe('NosqlComponent', () => {
  let component: NosqlComponent;
  let fixture: ComponentFixture<NosqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosqlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
