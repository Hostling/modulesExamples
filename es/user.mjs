export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function getName(user) {
    return `Имя пользователя: ${user.name}`;
}

export const getAge = (user) => `Возраст пользователя: ${user.age}`;
