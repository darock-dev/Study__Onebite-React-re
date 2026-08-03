// 1. 객체생성
let obj1 = new Object();  // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티(속성)
let person = {
  name: "홍길동",
  age: 33,
  hobby: "유튜브",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
}

// 3. 객체 프로퍼티를 다루는 방법
// 3.1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가
person.job = "fe developer";
person["favoriteFood"] = "Pizza";

// 3.3 프로퍼티를 수정
person.job = "engineer";
person["favoriteFood"] = "Pasta";

console.log(person);

// 3.4 프로퍼티 삭제
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티 존재유무 확인 (in 연산자)
let result1 = "name" in person;
console.log(result1); // true