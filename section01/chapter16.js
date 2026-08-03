// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black"
}

animal.age = 2; // 추가
animal.name = "까망이"  // 수정
delete animal.color;  // 삭제
// => 모두다 가능, 상수의 '값'을 변경할 수는 없지만, 상수 객체의 '속성'은 변경 가능

console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티

const person = {
  name: "홍길동",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  }
}

person.sayHi(); // 안녕!
person["sayHi"](); // 안녕!