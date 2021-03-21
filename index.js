const NumberArray = require("./lib/NumberArray");

// const StringArray = require("./lib/StringArray");

const str =  `Клон CodeSandbox. CodeSandbox — это онлайн-редактор кода и инструмент  900 прототипирования, позволяющий ускорить создание и обмен веб-приложениями. Не переусложняйте 666, постарайтесь реализовать только самые основные функции. Сосредоточьтесь на редакторе, так как это самая полезная функция 88. Чему вы научитесь, 1200 создав клон CodeSandbox: Как рендерить и запускать HTML, CSS и JavaScript внутри браузера.`;


// console.log(StringArray.getLetters(str));
// console.log(StringArray.getWords(str));

// console.log(StringArray.getSentences(str));

// console.log(StringArray.removeDigits(str));
// console.log(StringArray.removePunctuation(str));





const arr = [33, 56, 789, 6, -9, 34, 59, 81]
const numberArray = new NumberArray(arr);








console.log(numberArray.min());

console.log(numberArray.max());
console.log(numberArray.avg());

// // console.log(NumberArray.filter(arr));

console.log(numberArray.filter('even'));
console.log(numberArray.filter( 'odd'));
console.log(numberArray.filter('div', 2));

console.log(numberArray.count(5));

console.log(numberArray.getDictionary())