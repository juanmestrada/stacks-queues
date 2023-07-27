/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // create new node
    const newNode = new Node(val);

    // queue is empty
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return;
    }

    // add new node to the end of queue
    this.last.next = newNode;

    // update new last
    this.last = newNode;

    // increment queue size
    this.size++;

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // throw error if queue is empty
    if(this.size === 0) throw new Error('Queue is empty');

    // create pointer to node being removed
    const temp = this.first;

    // update new first
    this.first = this.first.next;

    // decrement size
    this.size--;

    // return node that was removed
    return temp.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    // throw error if queue is empty
    if(this.size === 0) throw new Error('Queue is empty');

    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !this.size;
  }
}

module.exports = Queue;
