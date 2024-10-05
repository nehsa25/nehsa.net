import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinqComponent } from './linq.component';

describe('LinqComponent', () => {
  let component: LinqComponent;
  let fixture: ComponentFixture<LinqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
