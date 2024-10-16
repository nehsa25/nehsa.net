import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticUiComponent } from './semantic-ui.component';

describe('SemanticUiComponent', () => {
  let component: SemanticUiComponent;
  let fixture: ComponentFixture<SemanticUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemanticUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanticUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
