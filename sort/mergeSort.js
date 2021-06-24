/* 归并排序，待深入理解后再写，下午再花费一小时 */
function merge(left,right){
  let temp = []
  while(left.length && right.length) {
    if(left[0]<right[0]){
      temp.push(left.shift())
    }else {
      temp.push(right.shift())
    }
  }
  return temp.concat(left,right) // 把剩下的连接进去
}
export default function mergeSort(data){
  if(data.length<=1) {
    return data
  }
  let mid = Math.floor(data.length/2)
  let left = data.slice(0,mid)
  let right = data.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}
// let arr = [5,4,8,1,0,3,2]
// console.log(mergeSort(arr))