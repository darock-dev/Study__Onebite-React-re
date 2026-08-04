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
  // console.log(key, value);
}

// 2) Object.values 사용
// => 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  // console.log(value);
}

// 3) for in 사용
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}

// * for of 반복분은 배열에만 사용 가능, for in 은 객체에만 사용가능
