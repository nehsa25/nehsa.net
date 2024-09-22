import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimpComponent } from './gimp.component';

describe('GimpComponent', () => {
  let component: GimpComponent;
  let fixture: ComponentFixture<GimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GimpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
