/*
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.
*/

let power_of = (x,n) => {
    let count = x;
    if (n == 0) {
        console.log(1)
        return
    } else if (n == 1) {
        console.log(x)
        return
    }
    for (var i = 1; i < n; i++) {
        count *= x
    }
    console.log(count)
}

power_of(2,2)