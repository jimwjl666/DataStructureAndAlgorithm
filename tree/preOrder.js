import bst from './bst.js'

// 先序遍历二叉树
/* 
        56
    22        81
  10    30   77  92

*/
function preOrder(node){
  if(node){
    console.log(node.show())
    preOrder(node.left);
    preOrder(node.right)
  }
}
preOrder(bst.root) // 56 22 10 30 81 77 92
