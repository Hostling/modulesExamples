// import { monthFromDate } from "./es/monthFromDate.mjs";
// console.log(monthFromDate('2022-10-10'));


// Асинхронное использование модуля
// async function loadMyModule(delay) {
//     const { default: calculate } = await import("./es/asyncEsModule.mjs");
//     const res = await calculate(222, 333, delay);
//     console.log(res);
// }
// const delay = 3000;
// loadMyModule(delay);
// console.log("Ждем загрузки модуля...");


// Импорт нескольких объектов
// import User, {getAge as age, getName} from "./es/user.mjs";
//
// const user = new User("Вася", 25);
// console.log(getName(user));
// console.log(age(user));