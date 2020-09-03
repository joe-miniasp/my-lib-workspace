import { Schema } from './schema';
import { Rule, Tree } from '@angular-devkit/schematics';

import {
  addPackageJsonDependency,
  NodeDependencyType,
  addModuleImportToRootModule,
  getProjectFromWorkspace,
  getWorkspace,
  WorkspaceProject,
} from 'schematics-utilities';

// Just return the tree
export function ngAdd(options: Schema): Rule {
  return (tree: Tree) => {
    const workspace = getWorkspace(tree);
    const project = getProjectFromWorkspace(
      workspace,
      options.project || workspace.defaultProject
    ) as WorkspaceProject;

    // 建立個人資料 user-info
    const userInfo =
      '開發人員 ' + options.name + ' 隸屬於 ' + options.department;

    // 檢查 user-info.txt 是否已存在，存在則複寫檔案，不存在則建立檔案
    tree.exists('user-info.txt')
      ? tree.overwrite('user-info.txt', userInfo)
      : tree.create('user-info.txt', userInfo);

    // import DemoFormModule 到 AppModule
    addModuleImportToRootModule(tree, 'DemoFormModule', 'demo-form', project);

    // 是否安裝 ngx-validators 套件
    if (options.isInstallNgxvalidators) {
      addPackageJsonDependency(tree, {
        type: NodeDependencyType.Default,
        version: '5.2.1',
        name: 'ngx-validators',
      });
    }

    // 是否 import ReactiveFormsModule 到 AppModule
    if (options.isImportReactiveForms) {
      addModuleImportToRootModule(
        tree,
        'ReactiveFormsModule',
        '@angular/forms',
        project
      );
    }

    return tree;
  };
}
