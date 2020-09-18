import { Rule, Tree } from '@angular-devkit/schematics';

import { Schema } from './schema';

// Just return the tree
export default function ngAdd(options: Schema): Rule {
  return (tree: Tree) => {
    return tree;
  };
}
