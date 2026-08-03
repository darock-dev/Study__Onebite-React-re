// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
  name: "홍길동",
  age: 23,
  hobby: "유튜브시청",
};

// name: myName -> name이라는 key를 myName이라는 변수로 할당
let { name: myName, age, hobby, extra = "hello" } = person;
// console.log(myName, age, hobby, extra); // 홍길동 23 유튜브시청 hello

// 3. 객체의 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra); // 홍길동 23 유튜브시청 undefined
};
func(person);
