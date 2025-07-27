// Нужно организовать логику/функцию для конвертации валют (нескольких пар), согласно входных параметров:
// - сумма средств, валюта (входящих) средств, целевая валюта (в какую конвертировать).
// - если такой (целевой) валюты нет, возврат - null.
// - поддерживаемые валюты (например, рубли, доллары, евро).

const CONVERSION_RU_USD = 79.55;
const CONVERSION_RU_EUR = 93.35;
const CONVERSION_USD_EUR = 0.92;

function getConversion(currencyAmount, inCurrency, outCurrency) {
  if (!currencyAmount || !inCurrency || !outCurrency) {
    return `Предоставлены не все данные! Конвертация не возможна!`;
  }

  if (typeof currencyAmount !== 'number') {
    return `Неверный формат суммы! Ожидается числовое значение!`;
  } else if (
    typeof inCurrency !== 'string' ||
    typeof outCurrency !== 'string'
  ) {
    return `Неверный формат валюты! Ожидаются строковые значения, типа: 'rub', 'usd'.`;
  }

  const inCurr = inCurrency.toLowerCase();
  const outCurr = outCurrency.toLowerCase();
  let convertSum;

  if (inCurr !== 'rub' && inCurr !== 'usd' && inCurr !== 'eur') {
    return null;
  } else if (outCurr !== 'rub' && outCurr !== 'usd' && outCurr !== 'eur') {
    return null;
  }

  if (inCurr === 'rub' && outCurr === 'rub') {
    return `Указана одинаковая пара валют ${inCurr}/${outCurr}. Конвертация не возможна!`;
  } else if (inCurr === 'usd' && outCurr === 'usd') {
    return `Указана одинаковая пара валют ${inCurr}/${outCurr}. Конвертация не возможна!`;
  } else if (inCurr === 'eur' && outCurr === 'eur') {
    return `Указана одинаковая пара валют ${inCurr}/${outCurr}. Конвертация не возможна!`;
  }

  if (inCurr === 'rub' && outCurr === 'usd') {
    return `Сумма конвертации Рублей в Доллары составила: ${(convertSum =
      currencyAmount / CONVERSION_RU_USD).toFixed(2)} долларов`;
  } else if (inCurr === 'usd' && outCurr === 'rub') {
    return `Сумма конвертации Долларов в Рубли составила: ${(convertSum =
      currencyAmount * CONVERSION_RU_USD).toFixed(2)} рублей`;
  }

  if (inCurr === 'rub' && outCurr === 'eur') {
    return `Сумма конвертации Рублей в Евро составила: ${(convertSum =
      currencyAmount / CONVERSION_RU_EUR).toFixed(2)} евро`;
  } else if (inCurr === 'eur' && outCurr === 'rub') {
    return `Сумма конвертации Евро в Рубли составила: ${(convertSum =
      currencyAmount * CONVERSION_RU_EUR).toFixed(2)} рублей`;
  }

  if (inCurr === 'usd' && outCurr === 'eur') {
    return `Сумма конвертации Долларов в Евро составила: ${(convertSum =
      currencyAmount * CONVERSION_USD_EUR).toFixed(2)} евро`;
  } else if (inCurr === 'eur' && outCurr === 'usd') {
    return `Сумма конвертации Евро в Доллары составила: ${(convertSum =
      currencyAmount / CONVERSION_USD_EUR).toFixed(2)} долларов`;
  }
}

console.log(getConversion(1000, 'RUB', 'USD')); // Сумма конвертации Рублей в Доллары составила: 12.57 долларов
console.log(getConversion(100, 'USD', 'RUB')); // Сумма конвертации Долларов в Рубли составила: 7955.00 рублей
console.log(getConversion(5000, 'RUB', 'EUR')); // Сумма конвертации Рублей в Евро составила: 53.56 евро
console.log(getConversion(500, 'EUR', 'RUB')); // Сумма конвертации Евро в Рубли составила: 46675.00 рублей
console.log(getConversion(50, 'USD', 'EUR')); // Сумма конвертации Долларов в Евро составила: 46.00 евро
console.log(getConversion()); // Предоставлены не все данные! Конвертация не возможна!
console.log(getConversion(10, 'rub', 'RUB')); // Указана одинаковая пара валют rub/rub. Конвертация не возможна!
console.log(getConversion(10, 'RUB', 'BLR')); // null
console.log(getConversion('10', 'eur', 'usd')); // Неверный формат суммы! Ожидается числовое значение!
console.log(getConversion(10, '123', 10)); // Неверный формат валюты! Ожидаются строковые значения, типа: 'rub', 'usd'.
