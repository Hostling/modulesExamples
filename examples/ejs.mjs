let count = 0;

export const increase = () => ++count;
export const reset = () => {
    count = 0;
    console.log('Счетчик сброшен.')
}
export const show = () => console.log(count);

// или
// export default {
//     increase,
//     reset,
//     show
// }