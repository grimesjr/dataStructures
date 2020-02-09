class LinkedList {
  constructor() {
    this.head = null;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let test = new LinkedList;
let node1 = new Node(1);
test.head = node1;
let node2 = new Node(1);
node1.next = node2;
let node3 = new Node(5);
node2.next = node3;
let node4 = new Node(7);
node3.next = node4;
//console.log(test);

//with temp buffer
let removeDuplicateLinkedList = function(node) {
  let seenVal = {};
  let ptr1;
  let ptr2;

  if(node) {
    ptr1 = node;
    ptr2 = node.next;
    seenVal[ptr1.val] = 1;
  } else {
    return;
  }

  while(ptr2) {
    if(!seenVal[ptr2.val]) {
      seenVal[ptr2.val] = 1;
      ptr1 = ptr2;
      ptr = ptr2.next;
    } else {
      ptr1.next = ptr2.next;
      ptr2 = ptr1.next;
    }
  }
  return node;
}
console.log(removeDuplicateLinkedList(test.head));
