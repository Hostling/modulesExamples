// Определяем CommonJS модуль
let count = 0
const increase = () => ++count
const reset = () => {
    count = 0
    console.log('Счетчик сброшен.')
}
const show = () => console.log(count);


// exports.increase = increase
// exports.reset = reset
// exports.show = show
// или (эквивалентно)
module.exports = {  increase,  reset, show }
