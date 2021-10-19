// Classic
// const iifeCounterModule = (() => {
//     let count = 0
//     return {
//         increase: () => ++count,
//         reset: () => {
//             count = 0
//             console.log('Счетчик сброшен.')
//         },
//         show: () => console.log(count)
//     }
// })()
//
// iifeCounterModule.increase();
// iifeCounterModule.increase();
// iifeCounterModule.show();
// iifeCounterModule.reset();




// Шаблон открытого модуля
// const revealingCounterModule = (() => {
//     let count = 0
//     const increase = () => ++count
//     const reset = () => {
//         count = 0
//         console.log('Счетчик сброшен.')
//     }
//     const show = () => console.log(count)
//
//     return {
//         increase,
//         reset,
//         show
//     }})()
//
// revealingCounterModule.increase()
// revealingCounterModule.increase()
// revealingCounterModule.show()
// revealingCounterModule.reset()


// CommonJS
// const {
//     increase,
//     reset,
//     show
// } = require('./examples/commonjs')
// increase();
// increase();
// show();
// reset();
// // или
// const commonJSCounterModule = require('./examples/commonjs')
// commonJSCounterModule.increase()
// commonJSCounterModule.increase()
// commonJSCounterModule.show()
// commonJSCounterModule.reset()

// ES6 Modules
// import {
//     increase,
//     reset,
//     show
// } from "./examples/ejs.mjs";
//
// increase()
// increase()
// show()
// reset()
//
// // или импорт из экспорта по умолчанию
// import esCounterModule from './examples/ejs.mjs';
//
// esCounterModule.increase();
// esCounterModule.increase();
// esCounterModule.show();
// esCounterModule.reset();