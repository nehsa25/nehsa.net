import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmComponent } from './npm.component';

describe('NpmComponent', () => {
  let component: NpmComponent;
  let fixture: ComponentFixture<NpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
