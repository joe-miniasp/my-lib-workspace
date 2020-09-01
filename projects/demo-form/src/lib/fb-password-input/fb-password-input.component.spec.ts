import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbPasswordInputComponent } from './fb-password-input.component';

describe('FbPasswordInputComponent', () => {
  let component: FbPasswordInputComponent;
  let fixture: ComponentFixture<FbPasswordInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbPasswordInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
