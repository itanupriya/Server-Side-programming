class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    contains(element) {
        return this.items.includes(element);
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.contains(20));