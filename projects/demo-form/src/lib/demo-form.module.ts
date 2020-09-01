import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FbButtonComponent } from './fb-button/fb-button.component';
import { FbInputComponent } from './fb-input/fb-input.component';
import { FbPasswordInputComponent } from './fb-password-input/fb-password-input.component';


@NgModule({
  declarations: [FbButtonComponent, FbInputComponent, FbPasswordInputComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FbButtonComponent, FbInputComponent, FbPasswordInputComponent],
})
export class DemoFormModule {}
