class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(data) {
        this.arr.push(data);
        return data;
    }

    dequeue() {
        const data = this.arr.shift();
        return data;
    }
}
const queue = new Queue();

console.log('enqueue 1', queue.enqueue(1));
console.log('enqueue 2', queue.enqueue(2));
console.log('enqueue 3', queue.enqueue(3));
console.log('dequeue ', queue.dequeue());
console.log('dequeue ', queue.dequeue());
console.log('dequeue ', queue.dequeue());
