class Stack {
  constructor() {
    this.arr = [];
  }
  // Add an element to the top of a stack
  push(el) {
    return this.arr.push(el);
  }

  // Remove an element from the top of a stack
  pop() {
    return this.arr.pop();
  }

  // Check if the stack is empty
  isEmpty() {
    return this.arr.length === 0;
  }

  //  Get the value of the top element without removing it
  peek() {
    return this.arr[this.arr.length - 1];
  }
}
