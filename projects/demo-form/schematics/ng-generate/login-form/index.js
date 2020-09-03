"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
function loginForm(options) {
    return schematics_1.chain([
        schematics_2.buildComponent(options, {
            template: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html.template',
            stylesheet: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.__style__.template',
        }),
    ]);
}
exports.loginForm = loginForm;
//# sourceMappingURL=index.js.map