import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWidgetComponent } from './angular-widget.component';

describe('AngularWidgetComponent', () => {
  let component: AngularWidgetComponent;
  let fixture: ComponentFixture<AngularWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
