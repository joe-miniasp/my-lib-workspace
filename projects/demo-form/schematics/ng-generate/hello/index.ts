import { Rule, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';

// Just return the tree
export function hello(options: Schema): Rule {
  return (tree: Tree) => {
    tree.create('src/hello.ts', `console.log('hello ${options.userName}');`);
    return tree;
  };
}
