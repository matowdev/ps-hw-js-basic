// Нужно написать 2 функции:
// 1. Шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
// 2. Проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном пароле и возвращает "true", если он совпадает со втором паролем и "false", если нет.
// Результат должен быть следующим:
// crypto(‘password’) -> ssapdorw
// check(‘ssapdorw’, ‘password’) -> true
// check(‘ssapdorw’, ‘wrong’) -> false

const defaultPass = 'password';
const defaultPas2 = 'wrong';

function getEncryption(password) {
  if (!password || password == ' ') {
    // return `Не корректный пароль!`;
    return false;
  }

  const reversePass = password.split('').reverse().join('');
  const randomNum = Math.floor(Math.random() * (1000 - 10 + 1) + 10);

  return reversePass + randomNum;
}

function passwordComparison(encryptPass, defaultPass) {
  if (!encryptPass || !defaultPass || defaultPass == ' ') {
    // return `Не все данные! Сравнение не возможно!`;
    return false;
  }

  const reverseTurn = encryptPass.split('').reverse().join('');

  return reverseTurn.includes(defaultPass);
}

const encryptPass = getEncryption(defaultPass);
console.log(encryptPass); // drowssap88

console.log(passwordComparison(encryptPass, defaultPass)); // true
console.log(passwordComparison(encryptPass, defaultPas2)); // false
