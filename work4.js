let a = +prompt('Введите минимальное число');
let b = +prompt('Введите максимальное число');
function num (a, b) {
    const intervalId = setInterval(function () {
       console.log(a);
       if (a == b) {
        clearInterval(intervalId);
       }
       a++;
    }, 1000);
}
num(a, b);