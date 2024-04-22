import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlsComponent } from './tls.component';

describe('TlsComponent', () => {
  let component: TlsComponent;
  let fixture: ComponentFixture<TlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
