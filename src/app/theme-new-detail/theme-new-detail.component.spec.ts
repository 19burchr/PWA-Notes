import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNewDetailComponent } from './theme-new-detail.component';

describe('ThemeNewDetailComponent', () => {
  let component: ThemeNewDetailComponent;
  let fixture: ComponentFixture<ThemeNewDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeNewDetailComponent]
    });
    fixture = TestBed.createComponent(ThemeNewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
