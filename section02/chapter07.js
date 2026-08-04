// 6가지 요소 조직 메서드

// 1. push
// 배열의 맨 뒤에 요소 추가
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);

//2. pop
// 배열의 맨 뒤 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(3);
console.log(poppedItem); // 3
console.log(arr2); // [1, 2]

// 3. shift
// 배열의 맨 앞 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem); // 1
console.log(arr3); // [2, 3]

// 4. unshift
// 배열의 맨 앞에 요소 추가
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); // 4 [0, 1, 2, 3]

// 5. slice
// 배열의 특정 범위를 잘라내 '새로운 배열'을 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 3, 4, 5
let sliced2 = arr5.slice(2); // 3, 4, 5
let sliced3 = arr5.slice(-3); // 3, 4, 5
console.log(arr5); // [1, 2, 3, 4, 5]

// 6. concat
// 두개의 서로 다른 배열을 붙여서 '새로운 배열'을 반환
let arr6 = [1, 2];
let arr7 = [3, 4, 5];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4, 5]
