let num = prompt ('Введите число');
function isPrime (num) {
 for (let i = 2; i < num; i++) {
   if (num >= 1000) {
      return 'Данные неверны';
   }
   else if (num % i === 0) {
     return 'Непростое число';
   }
 }
  return 'Простое число';   
}
alert (isPrime(num));