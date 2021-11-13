"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;
  if (D > 0) {
    arr[0] = (-b + Math.sqrt(D)) / (2 * a);
    arr[1] = (-b - Math.sqrt(D)) / (2 * a);
  } else if (D === 0) {
    arr[0] = (-b) / (2 * a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // валидация данных
  if (isNaN(+percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение \"${percent}\"`;
  }
  if (isNaN(+contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение \"${contribution}\"`;
  }
  if (isNaN(+amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение \"${amount}\"`;
  }

  // расчет выплат
  const currentDate = new Date();
  const colMonth = (date.getFullYear() - currentDate.getFullYear()) * 12 + (date.getMonth() - currentDate.getMonth()) +
      Number(date.getDate() > currentDate.getDate());
  const p = (1 / 12) * (percent / 100);
  totalAmount = +(colMonth * (amount - contribution) * p * (1 + 1 / ((1 + p) ** colMonth - 1))).toFixed(2);
  return totalAmount;
}
