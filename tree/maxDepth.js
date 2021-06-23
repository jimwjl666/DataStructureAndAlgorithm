import bst from './bst.js'
function getMaxDepth(root = bst.root){
  if(root===null) {
    return 0
  }else {
    return Math.max(getMaxDepth(root.left),getMaxDepth(root.right)) + 1
  }
}
console.log(getMaxDepth())