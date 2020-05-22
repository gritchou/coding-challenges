// https://dev.to/thepracticaldev/daily-challenge-1-string-peeler-4nep
const day1 = (stringToTrim) => stringToTrim.length > 2 ? stringToTrim.slice(1, -1) : null;

// https://dev.to/thepracticaldev/daily-challenge-2-string-diamond-21n2
const day2 = (asteriskNumber) => {
	// if asteriskNumber is even or negative early return
	if (!(asteriskNumber % 2) || asteriskNumber < 1) {
		return null;
	}
	const resultString = '';
	const resArray = [];
	const middleLine = '*'.repeat(asteriskNumber);
	resArray.push(middleLine);
	for (let i = 1; i < asteriskNumber / 2; i++) {
		const currentLine = ' '.repeat(i) + '*'.repeat(asteriskNumber - 2 * i) + ' '.repeat(i);
		resArray.push(currentLine);
		resArray.unshift(currentLine);
	}
	return resArray.join('\n');
}

// https://dev.to/thepracticaldev/daily-challenge-3-vowel-counter-34ni
// tests: '1354656^$$^ùmù😋jaimelarAAacleEEtteuH \naazeaEiDoIuueEAaztgbxvcw654' => 26
const day3 = (studyString) => {
	const lowerCaseStringToStudy = studyString.toLowerCase();
	let vowelCount = 0;
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let letter of lowerCaseStringToStudy) {
		if (vowels.includes(letter)) {
			vowelCount++;
		}
	}
	return vowelCount;
};

const day3Bis = (studyString) => (studyString.match(/[aeiou]/gi) || '').length;

// https://dev.to/thepracticaldev/daily-challenge-4-checkbook-balancing-hei
const day4 = (checkbook) => {
	const solutionArray = [];
	let totalExpense = 0;
	let averageExpense = 0;
	let expenseCount = 0;
	const lines = checkbook.split('\n');
	const originalBalance = parseFloat(lines.shift()).toFixed(2);
	let balance = originalBalance;
	solutionArray.push('Original_Balance: ' + originalBalance);
	for (line of lines) {
		const sanitizedLineArray = line.match(/[\w\s.]/ig).join('').split(' ');
		balance -= parseFloat(sanitizedLineArray[2]);
		solutionArray.push(sanitizedLineArray.join(' ') + ' Balance ' + balance.toFixed(2));
		expenseCount++;
	}
	solutionArray.push('Total expense ' + (originalBalance - balance));
	solutionArray.push('Average expense ' + ((originalBalance - balance) / expenseCount).toFixed(2));
	return solutionArray.join('\n');
}

const testDay4 = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`;
