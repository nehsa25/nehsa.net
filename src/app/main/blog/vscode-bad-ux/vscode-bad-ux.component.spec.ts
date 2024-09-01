import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VscodeBadUxComponent } from './vscode-bad-ux.component';

describe('VscodeBadUxComponent', () => {
  let component: VscodeBadUxComponent;
  let fixture: ComponentFixture<VscodeBadUxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VscodeBadUxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VscodeBadUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
