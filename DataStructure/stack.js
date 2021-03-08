class Stack {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
        return data;
    }

    pop() {
        const data = this.arr.pop();
        return data;
    }
}

const stack = new Stack();

console.log('stack push 1', stack.push(1));
console.log('stack push 2', stack.push(2));
console.log('stack push 3', stack.push(3));
console.log('stack pop ', stack.pop());
console.log('stack pop ', stack.pop());
console.log('stack pop ', stack.pop());