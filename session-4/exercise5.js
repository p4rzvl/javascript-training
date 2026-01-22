class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }
//code fix - adding instance method
  getStaticCount(){
    return Counter.getStaticCount();
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount()); // 10 -> other instances cannot access the static variables that is why the output is 10
console.log(Counter.getStaticCount()); //2 ->  Because static counter is incremented each time a new instance is created
console.log(c1.getStaticCount()); // 2-> code fix- now this function will call because it also exist in instance memory same logic as line 25
