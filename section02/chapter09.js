// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "Dova", hobby: "테니스" },
  { name: "Rina", hobby: "테니스" },
  { name: "Min", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

console.log(tennisPeople); // [ { name: 'Dova', hobby: '테니스' }, { name: 'Rina', hobby: '테니스' } ]

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx) => {
  return item * 2;
});
console.log(mapResult1); // [2, 4, 6]

let names = arr1.map((item) => {
  return item.name;
});
console.log(names); // ['Dova', 'Rina', 'Min']

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arrStr = ["b", "a", "c"];
arrStr.sort();
console.log(arrStr); // ['a', 'b', 'c']

let arrNum = [10, 3, 5];
// 숫자 배열을 정렬할 때에는 sort() 메서드에 콜백함수를 전달해야 함
arrNum.sort((a, b) => {
  if (a > b) {
    return 1; // a가 b보다 크면 1을 반환하여 a를 뒤로 보냄
  } else if (a < b) {
    return -1; // a가 b보다 작으면 -1을 반환하여 a를 앞으로 보냄
  } else {
    return 0; // a와 b가 같으면 0을 반환하여 순서를 바꾸지 않음
  }
});
console.log(arrNum); // [3, 5, 10]

// 4. toSorted
// 정렬된 '새로운 배열'을 반환하는 메서드
let arr5 = ["c", "b", " a"];
const sorted = arr5.toSorted();

console.log(arr5); // ['c', 'b', 'a']
console.log(sorted); // ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "dova"];
const joined = arr6.join("-");
console.log(joined); // hi-im-dova
