const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.setMaxListeners(3);

myEmitter.on('myEvent_1', () => {});
myEmitter.on('myEvent_1', () => {});
myEmitter.on('myEvent_1', () => {});
myEmitter.on('myEvent_1', () => {});



