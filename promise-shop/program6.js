var resolvedPromise = Promise.resolve('¡Hola desde Promise.resolve!');

resolvedPromise.then(function(value) {
  console.log('Promesa resuelta con éxito:', value);
});


resolvedPromise.catch(function(error) {
  console.error('¡Ups! Error en promesa resuelta:', error.message);
});


var rejectedPromise = Promise.reject(new Error('¡Algo salió mal en Promise.reject!'));


rejectedPromise.catch(function(error) {
  console.error('Error capturado por .catch():', error.message);
});

console.log('Programa principal ejecutándose...');


var anotherRejectedPromise = new Promise(function(fulfill, reject) {
    setTimeout(() => {
        reject(new Error('Error simulado con new Promise y reject!'));
    }, 100);
});

console.log('Programa principal después de otra promesa...');

anotherRejectedPromise.catch(function(err) {
    console.error('Error capturado con .catch() en otra promesa:', err.message);
});