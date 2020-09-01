import {
  Component,
  OnInit,
  Input,
  forwardRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import {
  AbstractControl,
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const MY_PASSWORD_INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FbPasswordInputComponent),
  multi: true
};

@Component({
  selector: 'lib-fb-password-input',
  templateUrl: './fb-password-input.component.html',
  styleUrls: ['./fb-password-input.component.css'],
  providers: [MY_PASSWORD_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class FbPasswordInputComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

  @Input() placeholder: string;

  protected destroy$ = new Subject<any>();

  control: AbstractControl = new FormControl();

  @Input('formControl') set formControl(formControl: AbstractControl) {
    this.control = formControl;
  }

  onChange: (value) => void;

  onTouched: () => void;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(val => this.noticeValueChange(val));
  }

  noticeValueChange(val) {
    if (this.onChange) {
      this.onChange(val);
    }
  }

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control?.disable() : this.control?.enable();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
