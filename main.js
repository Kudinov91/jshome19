//Задача 5

// let userNum = prompt("Введите пятизначное число: ");

// if (!isNaN(userNum) && userNum.length === 5) {
//   if (userNum === userNum.split("").reverse().join("")) {
//     console.log("Введенное число является палиндромом.");
//   } else {
//     console.log("Введенное число не является палиндромом.");
//   }
// } else {
//   console.log("введите корректное число.");
// }

//Задача 6

// let usdAmount = parseFloat(prompt("Введите количество USD:"));

// if (!isNaN(usdAmount)) {
//   let currencyChoice = prompt(
//     "Выберите валюту для конвертации (EUR, UAN или AZN):"
//   ).toUpperCase();
//   let exchange;
//   switch (currencyChoice) {
//     case "EUR":
//       exchange = 0.85;
//       break;
//     case "UAN":
//       exchange = 28.2;
//       break;
//     case "AZN":
//       exchange = 1.7;
//       break;
//     default:
//       console.log("Выбрана некорректная валюта. Выберите EUR, UAN или AZN.");
//       break;
//   }
//   let converted = usdAmount * exchange;
//   console.log("Сумма в " + currencyChoice + " : " + converted.toFixed(2));
// } else {
//   console.log("Введите корректное количество USD.");
// }

//Задача 7

// let purchaseAmount = parseFloat(prompt("Введите сумму покупки: "));

// if (!isNaN(purchaseAmount)) {
//   let discountRate = 0;

//   if (purchaseAmount >= 200 && purchaseAmount < 300) {
//     discountRate = 0.03;
//   } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//     discountRate = 0.05;
//   } else if (purchaseAmount >= 500) {
//     discountRate = 0.07;
//   }

//   let discountedAmount = purchaseAmount - purchaseAmount * discountRate;
//   console.log("Сумма к оплате со скидкой: " + discountedAmount.toFixed(2));
// } else {
//   console.log("Ввведите корректную сумму покупки.");
// }

//Задача 8

// let circle = parseFloat(prompt("Введите длину окружности:"));
// let square = parseFloat(prompt("Введите периметр квадрата:"));

// if (!isNaN(circle) && !isNaN(square) && circle > 0 && square > 0) {
//   let circleDiameter = circle / Math.PI;

//   let squareSide = square / 4;

//   if (circleDiameter <= squareSide) {
//     console.log("Окружность может поместиться в квадрат.");
//   } else {
//     console.log("Окружность не может поместиться в квадрат.");
//   }
// } else {
//   console.log("Введите конкретные значения.");
// }

//Задача 9

let day = parseInt(prompt("Введите день: "));
let month = parseInt(prompt("Введите месяц: "));
let year = parseInt(prompt("Введите год: "));

if (
  !isNaN(day) &&
  !isNaN(month) &&
  !isNaN(year) &&
  day > 0 &&
  day <= 31 &&
  month > 0 &&
  month <= 12 &&
  year > 0
) {
  let daysInMonth = new Date(year, month, 0).getDate();

  if (day <= daysInMonth) {
    let nextDate = new Date(year, month - 1, day + 1);

    let nextDay = nextDate.getDate();
    let nextMonth = nextDate.getMonth() + 1;
    let nextYear = nextDate.getFullYear();
    console.log(
      "Следующая дата: " + nextDay + " " + nextMonth + " " + " " + nextYear
    );
  } else {
    console.log("Некорректный день");
  }
} else {
  console.log("Пожалуйста введите корректные данные.");
}
