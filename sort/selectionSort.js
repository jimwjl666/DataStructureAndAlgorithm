/* 找到数组中的最小（大）值，并将其放到第一位，然后找到第二小的值放到第二位……以此类推 */
function selectionSort(arr){
  console.time('selectionSortStart')
  let len = arr.length
  for(let i = 0;i<len;i++){
    let min = i;// 假设i最小
    for(let j=i;j<len;j++){
      if(arr[j]<arr[min]){
        min = j
      }
    }
    if(min!==i){
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  console.timeEnd('selectionSortStart')
  return arr
}
//test
let arr = [5,1,6,7,2,0,9,11,14,0.1,100,-1]
console.log(selectionSort(arr))