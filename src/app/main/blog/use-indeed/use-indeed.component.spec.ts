import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseIndeedComponent } from './use-indeed.component';

describe('UseIndeedComponent', () => {
  let component: UseIndeedComponent;
  let fixture: ComponentFixture<UseIndeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseIndeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseIndeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
