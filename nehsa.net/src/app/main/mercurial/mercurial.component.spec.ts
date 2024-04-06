import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercurialComponent } from './mercurial.component';

describe('MercurialComponent', () => {
  let component: MercurialComponent;
  let fixture: ComponentFixture<MercurialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercurialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MercurialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
