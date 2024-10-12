import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuexComponent } from './vuex.component';

describe('VuexComponent', () => {
  let component: VuexComponent;
  let fixture: ComponentFixture<VuexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VuexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
