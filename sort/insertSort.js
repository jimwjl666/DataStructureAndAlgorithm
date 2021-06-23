function insertSort(arr) {
  let len = arr.length
  for(let i=1;i<len;i++){
    let j = i;
    let temp = arr[i]
    while(j>0 && arr[j-1]>temp){
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = temp
  }
  return arr
}
//test 
let arr = [5,1,6,7,2,0,9,11,14,0.1,100,-1]
console.log(insertSort(arr))