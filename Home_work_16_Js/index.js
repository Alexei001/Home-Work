// 2.1 Create a function that return fullName

function fullName (name) {

    return name;

}
const Name = fullName("Vacari Alexei");

console.log(Name);
// 2.2 Create a greeting function that accepts fullName param, and return a greeting message

function showMessage () {

    const message = `privet, ${Name}`;

    console.log(message);

}

showMessage();
// 2.3 Create a function that accepts a number and reverses it;
function reverse_a_number (n) {

    n = String(n);

    return n.split("").reverse().
        join("");

}
console.log(reverse_a_number(15354651));
// 2.4 Create a functiona that accepts a word, and return alphabetized string from it.

function alphabetized (str) {

    return str.split("").sort().
        join("").
        trim();

}
console.log(alphabetized("Republic of Moldova"));

// 1. Подключить ESLint и исправить форматинг для прошлого домашнего задания:(advanced)

function getDiscriminant (a, b, c) {

    return b * b - 4 * a * c;

}
const disc = getDiscriminant(
    2,
    5,
    2
);

console.log(disc);


