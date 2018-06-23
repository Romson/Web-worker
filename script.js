/*
//Script referenced by application (separate file)
var array = [ 7, 8, 9, 0, 1, 2, 3 ];
function processArray() {
    for (var i = 0; i < array.length; i++) {
        var result = handleData(arrayOfData[i]);
        postMessage(result);
    }  
}
function handleData(data) {
    var response = sendToRemoveServer(data);
    return response;
}
//New instance of web worker
var worker = new Worker('WorkerFile.js');
//Continue referencing web worker to either terminate or listen for messages.
//Listen
worker.onmessage = function (event) {
    console.log(event.data);
}
//Terminate
worker.terminate();
*/

//Example
var worker;
//Listen - referenced by app from a separate js file ('worker.js')
function startWorker() {
    worker = new Worker('js/worker.js');
    worker.onmessage = function(event) {
        document.getElementById('output').innerHTML += '<li>' + event.data + '</li>';
    };
}
//Terminate
function stopWorker() {
    worker.terminate();
}
