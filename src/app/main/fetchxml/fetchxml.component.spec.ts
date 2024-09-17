import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchxmlComponent } from './fetchxml.component';

describe('FetchxmlComponent', () => {
  let component: FetchxmlComponent;
  let fixture: ComponentFixture<FetchxmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchxmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchxmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
