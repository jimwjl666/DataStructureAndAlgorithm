import bst from './bst.js'
// 先序遍历二叉树
/* 
     56
 22      81
10  30  77  92

*/
function postOrder(node){
  if(node){
    postOrder(node.left);
    postOrder(node.right)
    console.log(node.show())
  }
}
postOrder(bst.root) // 10 30 22 77 92 81 56
