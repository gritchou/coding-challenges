class LinkedList {

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}
		if (this.length === 1) {
			const nodeToRemove = this.tail;
			this.head = null;
			this.tail = null;
			this.length--;
			return nodeToRemove;
		}
		const nodeToRemove = this.tail;
		let currentNode = this.head;
		let newTail = this.head;
		while (currentNode.next) {
			newTail = currentNode;
			currentNode = currentNode.next;
		}
		newTail.next = null;
		this.tail = newTail;
		this.length--;
		return nodeToRemove;
	}

	get(index) {
		if (index < 0 || index > this.length || this.isEmpty()) {
			return null;
		}
		if (index === 0) {
			return this.head;
		}
		if (index === this.length - 1) {
			return this.tail;
		}
		let iterator = 0;
		let currentNode = this.head;
		while (currentNode.next) {
			if (iterator === index) {
				break;
			}
			currentNode = currentNode.next;
			iterator++;
		}
		return currentNode;
	}

	delete(index) {
		if (index < 0 || index > this.length || this.isEmpty()) {
			return null;
		}
		if (index === 0) {
			if (this.length > 1) {
				const nodeToRemove = this.head;
				this.head = this.head.next;
				this.length--;
				return nodeToRemove;
			} else {
				const nodeToRemove = this.head;
				this.head = null;
				this.next = null;
				this.length = 0;
				return nodeToRemove;
			}
		}
		let iterator = 0;
		let currentNode = this.head;
		let previousNode;
		while (iterator < index) {
			iterator++;
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
		const nodeToDelete = currentNode;
		previousNode.next = nodeToDelete.next;
		if (!nodeToDelete.next) {
			this.tail = previousNode;
		}
		this.length--;
		return nodeToDelete;
	}

	isEmpty() {
		return !!this.length;
	}
}


class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}