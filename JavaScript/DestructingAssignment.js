// 배열 구조 분해
const users = ['u', 's', 'e'];
const [user1, user2, user3] = users;

console.log('user1', user1);
console.log('user2', user2);
console.log('user3', user3);

const numbers = [1, 2, 3];
const [num1, , num3, num4 = 4] = numbers;

console.log('num1', num1);
console.log('num3', num3);
console.log('num4', num4);

// 변수 2개의 값 교차 변경
let a = 10;
let b = 20;

[b, a] = [a, b];

console.log('a', a);
console.log('b', b);

// 객체 구조 분해

const obj = { q: 1, w: 2, e: 6 };
const { q, w, e, r = 4 } = obj;

console.log('q', q);
console.log('w', w);
console.log('e', e);
console.log('r', r);