var firstPromise = first();

firstPromise.then(function (secretValue) {
  return second(secretValue);
}).then(function (finalValue) {
  console.log(finalValue);
});