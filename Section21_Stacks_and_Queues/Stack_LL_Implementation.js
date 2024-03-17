class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.fisrt = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);

        if(!this.fisrt) {
            this.fisrt = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.fisrt;
            this.fisrt = newNode;
            this.fisrt.next = temp;
        }
        return ++this.size;  // size를 출력하면서 동시에 size의 값을 증가
    }
    pop() {
        if(!this.fisrt) return null;

        var temp = this.fisrt;

        if(this.fisrt === this.last) {
            this.last = null;
            
        }
        this.fisrt = this.fisrt.next
        this.size--;
        return temp.value;
    }
}

var stack = new Stack()

stack.push(23)
stack.push(54)
stack.push(71)
stack.push(97)

stack.pop()
stack.pop()