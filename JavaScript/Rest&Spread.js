// Rest

// 항상 마지막에 존재해야한다.
const func = (a, b, ...c) => {
    // c가 배열로 인자를 받는다.
    console.log(c);
};

func('a', 'b', 'c', 'd', 'e');
func('a', 'b', 'c', 'd', 'e');


// Spread

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const sumArr = [...arr1, ...arr2];

console.log('sumArr', sumArr);
