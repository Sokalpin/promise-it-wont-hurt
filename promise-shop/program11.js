function all(promise1, promise2) {
    return new Promise((resolve, reject) => {
      let counter = 0;
      const results = [];
  
      promise1.then((value) => {
        results[0] = value;
        counter++;
        if (counter === 2) {
          resolve(results);
        }
      }).catch(reject);
  
      promise2.then((value) => {
        results[1] = value;
        counter++;
        if (counter === 2) {
          resolve(results);
        }
      }).catch(reject);
    });
  }
  
  all(getPromise1(), getPromise2())
    .then(console.log);