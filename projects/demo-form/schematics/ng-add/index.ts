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
    // 取得 angular.json 內容
    const workspace = getWorkspace(tree);

    // 取得 angular.json projects 的 其中一個 project
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
    if (options.isInstallNgxValidators) {
      addPackageJsonDependency(tree, {
        type: NodeDependencyType.Default,
        version: '5.2.1',
        name: 'ngx-validators',
      });
    }

    // 執行套件安裝
    context.addTask(new NodePackageInstallTask());

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
