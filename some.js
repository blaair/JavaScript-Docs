/* 
some
- 성능을 위해 조건을 만족하는 값이 발견되면 그 즉시 순회는 중단된다 (return true)
- 내부 원소 한 개라도 만족하면 true
*/

let data = [
    { name: "a", age: 20 },
    { name: "b", age: 12 },
    { name: "c", age: 14 },
    { name: "d", age: 21 },
    { name: "e", age: 10 },
]

let result = data.some(x => {
    return x.age >= 20
});

console.log(result) //true



/* ******************* */
// 값이 배열 내 존재하는지 확인
var fruits = ['apple', 'banana', 'mango', 'guava'];
 
function checkAvailability(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal;
    });
}

// => 
// 화살표 함수를 사용하여 값이 존재하는지 확인
function checkAvailability(arr, val) {
    return arr.some(arrVal => val === arrVal);
    
}

checkAvailability(fruits, 'kela'); //false
checkAvailability(fruits, 'banana'); //true




/* ******************* */
// 모든 값을 불린으로 변환
var TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(a) {
    'use strict';

    var value = a;
    
    if (typeof value === 'string') {
        // toLowerCase: 문자열을 소문자로 변환
        // trim: 문자열 양 끝 공백 제거
        value = value.toLowerCase().trim();
    }

    return TRUTHY_VALUES.some(function (t) {
        return t === value;
    })
}

getBoolean(false); // false
getBoolean('false'); // false
getBoolean(1); // true
getBoolean('true'); // true