const promise = new Promise((resolve, reject) => {
    console.log('Promise started');
    const success = Math.random() >= 0.5;
    setTimeout(() => {
        if (success) resolve('Promise resolved successfully!');
        else reject('Promise resolved with error!');
    }, 3000);
});

console.log(promise);
promise
    .then(success => handleSuccess(success))
    .catch(error => handleError(error));
console.log('After promise');

function handle(result) {
    console.log(result);
}

function handleSuccess(result) {
    console.log('Handling success result');
    console.log(result);
}

function handleError(result) {
    console.error('Handling error result');
    console.error(result);
}
