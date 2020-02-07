/*Set data structure with return random value in Set
All methods O(1)
*/

class Set {
  constructor() {
    this.set = {};
    this.arrVal = []
  }
  add(val) {
    if (!this.has(val)) {
      this.set[val] = this.arrVal.length;
      this.arrVal.push(val);
    }
  }
  remove(val) {
    if(this.has(val)) {
      if(this.arrVal.length === 1) {
        this.arrVal.pop();
      } else {
        let lastVal = this.arrVal.pop();
        this.arrVal[this.set[val]] = lastVal;
        this.set[lastVal] = this.set[val]; 
      }
      delete this.set[val];
    }
  }
  has(val) {
    return !!(this.set[val] !== undefined);
  }
  randomVal() {
    return this.arrVal[Math.floor(Math.random() * this.arrVal.length)];
  }

}

let test = new Set();
test.add(4);
test.add(5);
test.add(6);
test.remove(5);
test.remove(4);
test.remove(6);
test.add(5);
test.add(5);
console.log(test);
