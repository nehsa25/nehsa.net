import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiImageGenerationComponent } from './ai-image-generation.component';

describe('AiImageGenerationComponent', () => {
  let component: AiImageGenerationComponent;
  let fixture: ComponentFixture<AiImageGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiImageGenerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiImageGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
