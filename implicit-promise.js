async function asyncMethod() {
    console.log('Async method started');
    await timeout(3000);
    const success = Math.random() >= 0.5;
    if (success) return 'Async method finished successfully!';
    else throw 'Async method finished with error!'
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const asyncResult = asyncMethod();
console.log(asyncResult);
asyncResult
    .then(success => handleSuccess(success))
    .catch(error => handleError(error));
console.log('After async');

function handleSuccess(result) {
    console.log('Handling success result');
    console.log(result);
}

function handleError(result) {
    console.error('Handling error result');
    console.error(result);
}
