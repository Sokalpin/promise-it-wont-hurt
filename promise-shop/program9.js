function parsePromised(json) {
    return new Promise((resolve, reject) => {
      try {
        const parsed = JSON.parse(json);
        resolve(parsed);
      } catch (error) {
        reject(error);
      }
    });
  }
  const invalidJsonString = process.argv[2];
  
  parsePromised(invalidJsonString)
   
    .then(null, (error) => console.log(error.message));