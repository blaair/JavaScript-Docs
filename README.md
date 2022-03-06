# JavaScript-Docs
JavaScript 문법 기록


### map()
배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
```javascript
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);

console.log(map1); //Array [2, 8, 18, 32]
```


### shift()
배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환한다. 이 메서드는 배열의 길이를 변하게 한다.
```javascript
const array1 = [1, 2, 3];
const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

```
