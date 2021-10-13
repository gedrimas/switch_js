// Task 1
class MyPromise {
  constructor(resolveCall) {
    resolveCall(this.resolve);
  }

  resolve = () => this;

  synchThen = (syncCallBack) => {
    syncCallBack();
    return this;
  };

  then = (asyncCalBack) =>
    setTimeout(() => {
      asyncCalBack();
      return this;
    }, 0);
}

let promise = new MyPromise((resolve) => {
  console.log(1);
  resolve();
})
  .synchThen(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });
console.log(4);

// Task 2
class ReversePromise {
  constructor(callBack) {
    this.counter = 400;
    callBack(this.resolve);
  }

  resolve = () => this;

  then = async (callBack) => {
    this.counter -= 100;

    await setTimeout(() => {
      callBack();
    }, this.counter);

    this.resolve();
  };
}

let promise = new ReversePromise((resolve) => {
  console.log(1);
  resolve();
})
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(4));
