/* 
1、如果根节点为null设置根节点为当前节点
2、如果插入的数字小于根节点的data，则根该节点有没有左节点，
没有则设置当前节点left为此节点，如果有则将parent设置为current
*/
function Node(data, left, right) {
  this.data = data;
  this.left = left || null;
  this.right = right || null;
  this.count = 1
  this.show = function () {
    return this.data;
  };
}
function BST() {
  this.root = null;
  this.insert = function (data) {
    let node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current; // 记录上次的current值
        if (data < current.data) {
          current = current.left;
          if (!current) {
            parent.left = node;
            break;
          }
        } else if(data > current.data) {
          current = current.right;
          if (!current) {
            parent.right = node;
            break;
          }
        } else if(data === current.data) {
          parent.count ++
          break;
        }
      }
    }
  };
  this.nodeCount = 0
  this.getNodeCount = function(node){
     node  = node || this.root
     if(node === this.root){
      this.nodeCount ++
     }
     if(node.left){
       this.nodeCount ++
       this.getNodeCount(node.left)
     }
     if(node.right){
       this.nodeCount ++
       this.getNodeCount(node.right)
     }
  }
}
let bst = new BST();
bst.insert(56);
bst.insert(22);
bst.insert(10);
bst.insert(30);
bst.insert(81);
bst.insert(77);
bst.insert(92);
/* console.log(bst.root); */
bst.getNodeCount()
// console.log(bst.nodeCount)
export default bst;
