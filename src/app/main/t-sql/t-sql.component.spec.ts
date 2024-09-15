import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSqlComponent } from './t-sql.component';

describe('TSqlComponent', () => {
  let component: TSqlComponent;
  let fixture: ComponentFixture<TSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSqlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
