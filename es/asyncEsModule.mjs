export default async function calculate(a,b, delay) {
    await timeout(delay);
    return a+b;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}