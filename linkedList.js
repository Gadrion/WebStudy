/** Linked List
 * ### 요구사항
 * 하나의 연속되는 항목들이 포인터로 연결된다.
 * 마지막 항목은 Null을 가리킨다.
 * 프로그램이 수행되는 동안 크기가 커지거나 작아질 수 있다.
 * (시스템 메모리가 허용하는 한) 필요한 만큼 길어질 수 있다.
 * 메모리 공안을 낭비하지 않는다(하지만 포인터를 위한 추가의 메모리를 필요로 한다).
 * 데이터의 삽입과 삭제가 가능해야 함.
*/

// node에는 데이터, 포인터 지시 필요
// list에는 길이, head 필요

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
        const node = new Node(data);
        let curr = this.head;

        if (this.head === null) {
            this.head = node;
        } else {
            curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.length++;
    }

    remove(position) {
        let removeData = null;
        if (Math.abs(position) <= this.length - 1) {
            let curr = this.head;

            if (position === 0) {
                removeData = this.head.data;
                this.head = this.head.next;
                this.length--;
            } else {
                let befor = this.head;
                let index = 0;
                while (position !== index) {
                    befor = curr;
                    curr = curr.next;
                    index++;
                }
                removeData = befor.data;
                befor.next = curr;
                this.length--;
            }
        }
        return removeData;
    }

    search(position) {
        let searchData = null;
        if (Math.abs(position) <= this.length - 1) {
            let curr = this.head;
            let index = 0;
            while (position !== index) {
                curr = curr.next;
                index++;
            }
            searchData = curr.data;
        }
        return searchData;
    }
}

const linkedList = new LinkedList();
console.log('length ', linkedList.length);
linkedList.add('test');
linkedList.add('test1');
linkedList.add('test2');
console.log('length ', linkedList.length);
console.log('search', linkedList.search(0));
console.log('search', linkedList.search(1));
console.log('search', linkedList.search(2));
console.log('remove', linkedList.remove(0));
console.log('length ', linkedList.length);
console.log('search', linkedList.search(0));
console.log('search', linkedList.search(1));
console.log('search', linkedList.search(2));
