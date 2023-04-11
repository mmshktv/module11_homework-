let x = +prompt('Введите число');
let n = +prompt('Введите его степень');
const pow = (x, n) => {
    return x ** n;
}

console.log(pow(x, n));