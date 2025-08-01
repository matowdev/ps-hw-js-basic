// Нужно написать 2 функции:
// 1. Шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
// 2. Проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном пароле и возвращает "true", если он совпадает со втором паролем и "false", если нет.
// Результат должен быть следующим:
// crypto(‘password’) -> ssapdorw
// check(‘ssapdorw’, ‘password’) -> true
// check(‘ssapdorw’, ‘wrong’) -> false

const defaultPass = 'password';
const defaultPass2 = 'wrong';

function getEncryption(password) {
  if (!password || password == ' ') {
    // return `Не корректный пароль!`;
    return false;
  }

  const middleIndex = Math.ceil(password.length / 2);
  const firsPart = password.slice(0, middleIndex).split('').reverse().join('');
  const secondPart = password.slice(middleIndex).split('').reverse().join('');
  const encryptPass = firsPart + secondPart;

  return encryptPass;
}

function passwordComparison(encryptPass, defaultPass) {
  if (!encryptPass || !defaultPass || defaultPass == ' ') {
    // return `Не все данные! Сравнение не возможно!`;
    return false;
  }

  const middleIndex = Math.ceil(encryptPass.length / 2);
  const firsPart = encryptPass
    .slice(0, middleIndex)
    .split('')
    .reverse()
    .join('');
  const secondPart = encryptPass
    .slice(middleIndex)
    .split('')
    .reverse()
    .join('');
  const deEncryptPass = firsPart + secondPart;

  return deEncryptPass === defaultPass;
}

const encryptPass = getEncryption(defaultPass);
console.log(encryptPass); // ssapdrow

console.log(passwordComparison(encryptPass, defaultPass)); // true
console.log(passwordComparison(encryptPass, defaultPass2)); // false
