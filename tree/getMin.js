import bst from './bst.js'
/* 
     56
 22      81
10  30  77  92

*/
function getMin(){
  let root = bst.root
  let current = root
  while(current.left){
    current = current.left
  }
  return current.data
}
console.log(getMin()) // 10