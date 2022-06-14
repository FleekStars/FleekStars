import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCodeBuilderComponent } from './html-code-builder.component';

describe('HtmlCodeBuilderComponent', () => {
  let component: HtmlCodeBuilderComponent;
  let fixture: ComponentFixture<HtmlCodeBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCodeBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCodeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
