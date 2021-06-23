import Stack from './stack.js'
/* 
  MinStack
*/
class MinStack extends Stack {
  min_stack = new Stack()
  data_stack = new Stack()
  push(item){
   this.data_stack.push(item)
   if(this.min_stack.isEmpty() || item < this.min_stack.top()) {
     this.min_stack.push(item)
   }
  }
  min(){
    return this.min_stack.top()
  }
  display(){
    return this.data_stack
  }
}
let minStack = new MinStack()
minStack.push(1)
minStack.push(2)
minStack.push(3)
console.log(minStack.min())
console.log(minStack.display())