import { chain, Rule } from '@angular-devkit/schematics';
import { buildComponent } from '@angular/cdk/schematics';

function getVersion() {
  const now = new Date();
  return 'v.' + now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
}

export function loginForm(options: any): Rule {
  return chain([
    buildComponent(
      {
        ...options,
        getVersion,
      },
      {
        template:
          './__path__/__name@dasherize__/__name@dasherize__.component.html.template',
        stylesheet:
          './__path__/__name@dasherize__/__name@dasherize__.component.__style__.template',
      }
    ),
  ]);
}
