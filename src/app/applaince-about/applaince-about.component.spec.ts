import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplainceAboutComponent } from './applaince-about.component';

describe('ApplainceAboutComponent', () => {
  let component: ApplainceAboutComponent;
  let fixture: ComponentFixture<ApplainceAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplainceAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplainceAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
