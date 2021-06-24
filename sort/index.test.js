import bubbleSort from './bubbleSort.js'
import mergeSort from './mergeSort.js'
import qSort from './qsort.js'
import insertSort from './insertSort.js'
function initData(n){
  let arr = []
  for(let i=0;i<n;i++){
    arr.push(parseInt(Math.random()*n))
  }
  return arr
}
let ret = initData(100000)

//冒泡排序 1000w数据时间太大
/* console.time('bubbleSort')
bubbleSort(ret)
console.timeEnd('bubbleSort') */
// 归并排序 100w 
console.time('mergeSort')
mergeSort(ret)
console.timeEnd('mergeSort')

// 快速排序100w  1.2s
console.time('qSort')
qSort(ret)
console.timeEnd('qSort')

console.time('insertSort')
insertSort(ret)
console.timeEnd('insertSort')

// 系统排序 100w 600ms
  console.time('jsSort')
  ret.sort()
  console.timeEnd('jsSort')

