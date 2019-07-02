// class Counter {
//   constructor() {
//     this.count = 0;
//   }
//   increment() {
//     this.count++;
//   }
// }

// function Counter() {
//   this.count = 0;
//   this.increment = this.increment.bind(this);
// }

// Counter.prototype.increment = function() {
//   this.count++;
// };

// const counter = new Counter();
// counter.increment();

// console.log(counter.count);


class Counter {
  count = 0
  increment() {
    this.count++;
  }
}

const counter = new Counter();
counter.increment();

console.log(counter.count);