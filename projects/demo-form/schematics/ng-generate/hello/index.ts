import { Rule, Tree } from '@angular-devkit/schematics';

// Just return the tree
export function hello(options: any): Rule {
  return (tree: Tree) => {
    return tree;
  };
}
