const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
	return arr;
};

const bubbleSortDoWhile = (arr) => {
	let swapped = false;
	do {
		swapped = false;
		arr.forEach((item, index) => {
			if (item > arr[index + 1]) {
				let tmp = item;
				arr[index] = arr[index + 1];
				arr[index + 1] = tmp;
				swapped = true;
			}
		});
	} while (swapped);
	return arr;
}

function testSort(sorter) {
	const array = [2, 10, -1, 0, 10, 12, 13, 7];
	sorter(array);
	const expected = [-1, 0, 2, 7, 10, 10, 12, 13];
	for (let i = 0; i < expected; i++) {
		if (array[i] != expected[i])
			throw "Epic fail at index " + i + " expected " + expected[i] + " actual " + array[i];
	}
}

function tests() {
	testSort(bubbleSort);
	testSort(bubbleSortDoWhile);
}
