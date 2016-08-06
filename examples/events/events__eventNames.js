const EventEmitter = require('events');
const myEE = new EventEmitter();

myEE.on('myEvent_1', () => {});

// Внимание — считаются только разные имена, `myEvent_1` второй раз не будет добавлено
myEE.on('myEvent_1', () => {});

myEE.on('myEvent_2', () => {});

console.log("myEE.eventNames: ", myEE.eventNames());
// log:  myEE.eventNames:  [ 'myEvent_1', 'myEvent_2' ]


