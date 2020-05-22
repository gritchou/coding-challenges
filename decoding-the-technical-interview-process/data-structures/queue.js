class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(item) {
		this.queue.push(item);
	}

	dequeue() {
		return this.queue.shift();
	}

	peek() {
		return this.queue[0];
	}

	isEmpty() {
		return !!this.length;
	}

	get length() {
		return this.queue.length;
	}
}