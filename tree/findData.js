import bst from './bst.js'
/* 
     56
  22     81
10  30  77  92

*/
function findNodeFromBST(data){
  let current = bst.root
  while(current){
    if(current.data===data){
      return current
    }else if(data < current.data){
      current = current.left
    }else if(data > current.data) {
      current = current.right
    }
  }
  return null
}

console.log(findNodeFromBST(81))