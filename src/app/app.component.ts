import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginForm = this.fb.group({
    account: '',
    password: '',
  });

  constructor(private fb: FormBuilder) {}

  login() {
    const message =
      '帳號:' +
      this.loginForm.get('account').value +
      '\n' +
      '密碼:' +
      this.loginForm.get('password').value;
    alert(message);
  }
}
