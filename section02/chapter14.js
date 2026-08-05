// async
// => 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환

async function getData() {
  return {
    name: "김다희",
    id: "dova",
  };
}

console.log(getData()); // Promise 반환

async function printData() {
  // await: 프로미스의 비동기 작업이 처리될 때까지 기다렸다가, 그 결과를 반환
  const data = await getData();
  console.log(data); // 결과 반환 { name: '김다희', id: 'dova' }
}

printData();
