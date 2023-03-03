import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualDiaryComponent } from './virtual-diary.component';

describe('VirtualDiaryComponent', () => {
  let component: VirtualDiaryComponent;
  let fixture: ComponentFixture<VirtualDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualDiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
