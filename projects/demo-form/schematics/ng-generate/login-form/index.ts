import { chain, Rule } from '@angular-devkit/schematics';
import { buildComponent } from '@angular/cdk/schematics';

export default function loginForm(options: any): Rule {
  return chain([
    buildComponent(
      { ...options },
      {
        template:
          './__path__/__name@dasherize__/__name@dasherize__.component.html.template',
        stylesheet:
          './__path__/__name@dasherize__/__name@dasherize__.component.__style__.template',
      }
    ),
  ]);
}
