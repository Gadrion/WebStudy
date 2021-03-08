class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    add(data) {
        const addNode = new Node(data);
        if (this.head === null) {
            this.head = addNode;
        } else {
            let currentNode = this.head;
            let index = 0;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
                index++;
            }
            currentNode.next = addNode;
        }
        return this.addNode;
    }

    remove(position) {
        let currentPosition = position === undefined ? this.length - 1 : position;
        let removeNode = null;

        if (currentPosition === 0) {
            removeNode = this.head;
            this.head = this.head.next;
            this.length--;
        } else {
            let beforeNode = null;
            let currentNode = this.head;
            let index = 0;

            while (index !== currentPosition) {
                beforeNode = currentNode;
                currentNode = beforeNode.next;
                index++;
            }
            removeNode = currentNode;
            beforeNode.next = currentNode.next;
            this.length--;
        }

        return removeNode;
    }

    search(position) {
        let currentNode = this.head;
        let index = 0;
        while(index !== position) {
            currentNode = currentNode.next;
            index++;
        }

        return currentNode;
    }
}

const linked = new LinkedList();

console.log('add 1', linked.add(1));
console.log('add 2', linked.add(2));
console.log('add 3', linked.add(3));
console.log('add 4', linked.add(4));
console.log('add 5', linked.add(5));
console.log('search 2', linked.search(2));
console.log('remove 2', linked.remove(2));
console.log('remove 2', linked.remove(2));
console.log('search 2', linked.search(2));
