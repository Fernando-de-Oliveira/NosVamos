import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetosFormComponent } from './trajetos-form.component';

describe('TrajetosFormComponent', () => {
  let component: TrajetosFormComponent;
  let fixture: ComponentFixture<TrajetosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
