import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongCardComponent } from './long-card.component';

describe('LongCardComponent', () => {
  let component: LongCardComponent;
  let fixture: ComponentFixture<LongCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});