import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGeneralInformationsComponent } from './site-general-informations.component';

describe('SiteGeneralInformationsComponent', () => {
  let component: SiteGeneralInformationsComponent;
  let fixture: ComponentFixture<SiteGeneralInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteGeneralInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGeneralInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
