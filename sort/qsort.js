export default function qSort(arr) {
  if (arr.length === 0) {
    return [];
  }
  let lesser = [];
  let greater = [];
  let pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return qSort(lesser).concat(pivot, qSort(greater));
}
// console.log(qSort([5, 1, 6, 5, 3]));
/* 
  5  [1,3]  [6,5]
  // [1,3]
  1  []   [3]
  3  []   []
  5
  // [6,5]
  5  []  []
  6  [5] []
 
  
*/


