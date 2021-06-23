import bst from './bst.js'
/* 
     56
 22      81
10  30  77  92

*/
function getMax(){
  let root = bst.root
  let current = root
  while(current.right){
    current = current.right
  }
  return current.data
}
console.log(getMax()) // 92