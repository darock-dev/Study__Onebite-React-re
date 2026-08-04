// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 현재 날짜와 시간으로 생성
let date2 = new Date("1997/12/25/23:50:50"); // 지정 날짜 생성
console.log(date2);

// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);
console.log(date1, date4); // 동일한 날짜와 시간이 출력됨

// 3. 시간 요소를 추출하는 방법
let year = date1.getFullYear(); // 년도
let month = date1.getMonth() + 1; // 월 (0~11) => +1
let date = date1.getDate(); // 일
let hour = date1.getHours(); // 시
let minute = date1.getMinutes(); // 분
let second = date1.getSeconds(); // 초

// 4. 시간 수정하기
date1.setFullYear(2026);
date1.setMonth(7);
date1.setDate(4);
date1.setHours(17);
date1.setMinutes(3);
date1.setSeconds(30);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Sat Jul 04 2026
console.log(date1.toLocaleString()); // 2026. 7. 4. 오후 5:03:30
