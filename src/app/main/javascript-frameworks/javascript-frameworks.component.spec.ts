import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptFrameworksComponent } from './javascript-frameworks.component';

describe('JavascriptFrameworksComponent', () => {
  let component: JavascriptFrameworksComponent;
  let fixture: ComponentFixture<JavascriptFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptFrameworksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavascriptFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
