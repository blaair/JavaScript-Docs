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

