
const min = (arr) => {
    let res = arr[0];
    for (let item of arr) {
        if (item < res) {
            res = item;
        }
    } return res;
}
const max = (arr) => {
    let res = 0;
    for (let item of arr) {
        if (item > res) {
            res = item;
        }
    }return res;
}

const avg = (arr) => {
    let sum  = 0;
    for (let item of arr) {
        sum = sum + item;
    }
    return sum/arr.length;
}

// Функции числовых массивов. Часть 2.


// const filter = (arr) => {
//     return arr.filter((item) => {
//         if (item % 2 == 0) {
//             return true;
//         } return false;
//     })
// }

const filter = (arr, type, div) => {
    if ( type == "even") {
        return arr.filter((item) => {
            if (item % 2 === 0) {
                return true;
            }return false;
        })
    }
    if (type == 'odd') {
        return arr.filter((item) => {
            if (item % 2 === 1) {
                return true;
            }return false;
        })
    }
    if (type == "div") {
        return arr.filter((item) => {
            if (item % div === 0) {
                return true;
            }return false;
        })
    }
}


const count = (arr, element) => {
    let res = 0;
    for (let item of arr) {
        if (element === item) {
            res +=1;
        }
    } 
    return res;
}
 const getDictionary = (arr) => {
     const dictionary = {}
     for (let item of arr) {
         if (!dictionary[item]) {
            dictionary[item] = 0;
         } dictionary[item]+=1;
         
     }return dictionary;
 }



module.exports = {
    min,
    max,
    avg,
    filter, 
    count,
    getDictionary
}