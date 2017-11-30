import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowSectionBackgroundComponent } from './shadow-section-background.component';

describe('ShadowSectionBackgroundComponent', () => {
  let component: ShadowSectionBackgroundComponent;
  let fixture: ComponentFixture<ShadowSectionBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowSectionBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowSectionBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
