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

//Cracking the Coding Interview pg99 3.3
class SetOfStacks {
  constructor(limit) {
    this.stacks = new Stack;
    this.limit = limit;
    this.curSize = 0;
    this.curStack = this.stacks;
  }
  push(val) {
    if(this.curSize === 0) {
      this.curStack.top = new Stack;
      this.curStack.top.push(val);
      this.curSize++;
    } else if(this.curSize === this.limit) {
        let newStack = new Stack;
        this.stacks.push(newStack);
        this.curStack = newStack;
        this.curStack.top = new Stack;
        this.curStack.top.push(val);
        this.curSize = 1;
    } else {
      this.curStack.top.push(val);
      this.curSize++;
    }
  }
  pop() {
    if(this.curSize === 1) {
      let popVal = this.curStack.top.pop();
      let lastPop = this.stacks.pop();
      this.curStack = lastPop.top.next;
      this.curSize = this.limit;
      return popVal;
    } else {
      this.curSize--;
      return this.curStack.top.pop();
    }
  }
}

