// forEach
const array = [1,2,3,4,5];

console.log('-------forEach');
array.forEach((item, index) => console.log(`${item}....${index}`));

// for in
console.log('-------for in');
for (let key in array) {
    console.log(`${array[key]}.... ${key}`);
}

// for of
console.log('-------for of');
for (let item of array) {
    console.log(`${item}`);
}

// map
console.log('-------map');
array.map(item => console.log(`${item}`));