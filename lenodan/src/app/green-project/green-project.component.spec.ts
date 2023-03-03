import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenProjectComponent } from './green-project.component';

describe('GreenProjectComponent', () => {
  let component: GreenProjectComponent;
  let fixture: ComponentFixture<GreenProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
