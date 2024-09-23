import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValheimComponent } from './valheim.component';

describe('ValheimComponent', () => {
  let component: ValheimComponent;
  let fixture: ComponentFixture<ValheimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValheimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValheimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
