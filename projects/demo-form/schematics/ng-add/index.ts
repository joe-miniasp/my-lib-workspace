import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import {
  addModuleImportToRootModule,
  getProjectFromWorkspace,
} from '@angular/cdk/schematics';

import {
  NodeDependencyType,
  addPackageJsonDependency,
} from '@schematics/angular/utility/dependencies';

import { getWorkspace } from '@schematics/angular/utility/config';
import { WorkspaceProject } from '@schematics/angular/utility/workspace-models';

import { Schema } from './schema';

// Just return the tree
export default function ngAdd(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return tree;
  };
}
