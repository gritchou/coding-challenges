class Stack {
	constructor() {
		this.stack = [];
	};

	pop() {
		return this.stack.pop();
	}

	push(item) {
		return this.stack.push(item);
	}

	peek() {
		return this.stack[this.length - 1];
	}

	isEmpty() {
		return !!this.length;
	}

	get length() {
		return this.stack.length;
	}
}
