import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudMakingOfComponent } from './mud-making-of.component';

describe('MudMakingOfComponent', () => {
  let component: MudMakingOfComponent;
  let fixture: ComponentFixture<MudMakingOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MudMakingOfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MudMakingOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
