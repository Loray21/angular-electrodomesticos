import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoutApplaincesComponent } from './zout-applainces.component';

describe('ZoutApplaincesComponent', () => {
  let component: ZoutApplaincesComponent;
  let fixture: ComponentFixture<ZoutApplaincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoutApplaincesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoutApplaincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
