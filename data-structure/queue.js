class Queue {
  constructor() {
    return (this.arr = []);
  }

  // Last in : 마지막에 요소를 넣는다.
  enQueue(el) {
    return this.arr.push(el);
  }

  // First out : 첫번 째 요소를 삭제한다.
  deQueue() {
    return this.arr.shift();
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  // 첫 번째 요소의 값을 가져온다.
  peek() {
    return this.arr[0];
  }
}
