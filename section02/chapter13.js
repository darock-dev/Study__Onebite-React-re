function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("실패: 숫자가 아닙니다.");
      }
    }, 1000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result); // 10
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 20
    return add10(undefined);
  })
  .catch((error) => {
    console.log(error);
  });

// then 메서드
// => 성공한다면 그 후에
// catch 메서드
// -> 실패했다면 그 후에
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
