import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeChangeDetailComponent } from './theme-change-detail.component';

describe('ThemeChangeDetailComponent', () => {
  let component: ThemeChangeDetailComponent;
  let fixture: ComponentFixture<ThemeChangeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeChangeDetailComponent]
    });
    fixture = TestBed.createComponent(ThemeChangeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
