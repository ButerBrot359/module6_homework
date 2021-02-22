/*
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function num_sum(first_num) {
    return function (second_num) {
        return first_num+second_num
    }
}
console.log(num_sum(1)(2))