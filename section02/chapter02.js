// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }

// // 단락평가 작동 => returnFalse()가 이미 falsy한 값을 return 하기때문에 단락평가가 작동됨
// console.log(returnFalse() && returnTrue()); // False 함수, undefined 만 표시

// 단락평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "이름이 없습니다.");
}

printName(); // 이름이 없습니다.
printName({ name: "홍길동" }); // 홍길동

// T && T => 두번째 Truthy값 반환
// T || T => 첫번째 Truthy값 반환
