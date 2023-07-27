/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    // create new node
    const newNode = new Node(val);

    // queue is empty
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return;
    }

    // add pointer to previous top of stack to new node
    newNode.next = this.first;

    // update new top (first) of stack
    this.first = newNode;
 
    // increment queue size
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // stack is empty
    if(this.length === 0) throw new Error("Stack is already empty");

    // create pointer to node being popped off the top of stack
    const temp = this.first;

    // update new first
    this.first = this.first.next;

    // decrement stack size
    this.size--;

    // return value of node being removed
    return temp.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.size;
  }
}

module.exports = Stack;
