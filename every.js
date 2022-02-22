/* 
every
- 성능을 위해 조건을 만족하지 않는 값이 발견되면 그 즉시 순회는 중단된다 (return false)
- 모두 만족해야 true
*/

let data = [
    { name: "a", age: 20 },
    { name: "b", age: 12 },
    { name: "c", age: 14 },
    { name: "d", age: 21 },
    { name: "e", age: 10 },
]

let result = data.every(x => {
    return x.age >= 20
});

console.log(result) //false

