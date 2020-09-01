import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbInputComponent } from './fb-input.component';

describe('FbInputComponent', () => {
  let component: FbInputComponent;
  let fixture: ComponentFixture<FbInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
