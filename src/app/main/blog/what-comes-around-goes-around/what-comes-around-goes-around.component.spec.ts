import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatComesAroundGoesAroundComponent } from './what-comes-around-goes-around.component';

describe('WhatComesAroundGoesAroundComponent', () => {
  let component: WhatComesAroundGoesAroundComponent;
  let fixture: ComponentFixture<WhatComesAroundGoesAroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatComesAroundGoesAroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatComesAroundGoesAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
