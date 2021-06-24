/* 关键点，相邻两个对比，遍历n次 */
export default function bubbleSort(arr) {
  console.time('bubbleSortStart')
  let len = arr.length
  for(let i= 0; i<len; i++){
    for(let j=0; j<len-1-i; j++) {
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  console.timeEnd('bubbleSortStart')
  return arr
}
//test
// let arr = [5,1,6,7,2,0,9,11,14,0.1,100,-1]
// console.log(bubbleSort(arr))