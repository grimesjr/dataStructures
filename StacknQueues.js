class Stack {
  constructor() {
    this.top = null;
  }
  push(val) {
    let newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    let value = this.top.val;
    this.top = this.top.next;
    return value;
  }
  peek() {
    return this.top.value;
  }
  isEmpty() {
    return top === null;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Queue

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  add(val) {
    if(this.first === null) {
      this.first = new Node(val);
      this.last = this.first;
    } else {
      this.last.next = new Node(val);
      this.last = this.last.next;
    }
  }
  remove() {
    if(this.first === null) {
      return null;
    } else {
      let val = this.first.val;
      this.first = this.first.next;
      return val;
    }
  }
  peek() {
    return this.first.val;
  }
  isEmpty() {
    return this.first === null;
  }
}