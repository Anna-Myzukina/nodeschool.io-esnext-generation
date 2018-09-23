//Exercise 2
/*Write a function filterForNumbers(iterable) which extracts only the numeric
values from iterable, returning those values as an Array. iterable could be
any built-in Iterable, or a custom Iterable exposing an Iterator via the key
Symbol.iterator
- Iterating Arrays Using `.forEach()`
- Iterating Objects Using `for...in`
- Iterating Iterables Using `for...of`
*/
module.exports = function filterForNumbers(iterable) {
    // loop over iterable, adding numeric values to a new array
    // then return the new array of numbers
    var numbers = [];

    for (var item of iterable) {
        if (typeof item === 'number') {
            numbers.push(item);
        }
    }

    return numbers;
}