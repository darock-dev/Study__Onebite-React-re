// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2); // 0 2, 1 4, 2 6
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let result = arr2.includes(2); // true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 1

let objectArr = [{ name: "Dova" }, { name: "Rina" }];

console.log(
  objectArr.indexOf({ name: "Dova" }) // -1 * indexOf로는 배열에서 특정 '객체값'이 존재하는지 찾아낼 수 없음
);

console.log(
  objectArr.findIndex((item) => {
    if (item.name === "Dova") return true;
  })
); // 0

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});
// console.log(findedIndex); // 1

// ✅ 원시타입의 값을 찾을 때에는 indexOf를, 객체 같은 참조타입의 값을 찾을 때에는 findIndex를 사용

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "Dova" }, { name: "Rina" }];

const finded = arr5.find((item) => {
  return item.name === "Dova";
});

console.log(finded); // {name: "Dova"}
