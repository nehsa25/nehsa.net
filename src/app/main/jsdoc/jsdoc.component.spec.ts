import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsdocComponent } from './jsdoc.component';

describe('JsdocComponent', () => {
  let component: JsdocComponent;
  let fixture: ComponentFixture<JsdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsdocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
