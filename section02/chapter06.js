// 1. 배열 순회
let arr = [1, 2, 3];

// 1) 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// 2) for of 반복문
for (let item of arr) {
  // console.log(item);
}

// 2. 객체 순회
let person = {
  name: "Dova",
  age: 36,
  hobby: "유튜브시청",
};

// 1) Object.keys 사용
// => 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  // console.log(key, value); //  name Dova, age 36, hobby 유튜브시청
}

// 2) Object.values 사용
// => 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  // console.log(value);  // Dova, 36, 유튜브시청
}

// 3) for in 사용
for (let key in person) {
  const value = person[key];
  console.log(key, value); // name Dova, age 36, hobby 유튜브시청
}

// for of - 배열에 사용, key를 순회(객체의 속성을 꺼낼 때 적합)
// for in - 객체에 사용, value를 순회(배열 등 순서가 있는 자료형의 값을 꺼낼 때 적합)
