import Stack from './stack.js'
function validStr(str){
  let stack = new Stack()
  for(let i=0;i<str.length;i++){
    if(str[i]==='('){
      stack.push(str[i])
    }else if(str[i]===')'){
      stack.pop()
    }
  }
  if(!stack.isEmpty()){
    return false
  }
  return true
}
let str = '(111)(b(c)'
let str2 = '(222)(v(d))'
console.log(validStr(str)) // false
console.log(validStr(str2)) // true