import bst from './bst.js'
// 中序遍历二叉树
/* 
     56
 22      81
10  30  77  92

*/
function inOrder(node){
  if(node){
    inOrder(node.left);
    console.log(node.show())
    inOrder(node.right)
  }
}
inOrder(bst.root) // 10 22 30 56 77 81 92
